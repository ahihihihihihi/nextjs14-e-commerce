import React from "react";
import "./Card.scss";
import Link from "next/link";

const Card = ({ item }) => {
    // console.log(item);
    return (
        <Link className="link" href={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img
                        src={
                            process.env.NEXT_PUBLIC_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                        }
                        alt=""
                        className="mainImg"
                    />
                    <img
                        src={
                            process.env.NEXT_PUBLIC_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
                        }
                        alt=""
                        className="secondImg"
                    />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice || item?.attributes?.price + 20}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;