import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";



const Cart = (props) => {

    const { open, setOpen } = props

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className="cart" >
            <div className="head" >
                <h1>Products in your cart</h1>
                <span onClick={() => setOpen(!open)}><CloseIcon className="close" /></span>
            </div>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={process.env.NEXT_PUBLIC_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 50)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button >PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;