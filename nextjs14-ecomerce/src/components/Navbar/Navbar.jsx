'use client'

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss"
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import Link from "next/link";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const products = useSelector((state) => state.cart.products);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" href="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" href="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" href="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" href="/">LAMASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" href="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" href="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" href="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" href="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart
                setOpen={setOpen}
                open={open}
            />}
        </div>
    );
};

export default Navbar;