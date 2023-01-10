import React, {useState, useEffect} from "react";
import { URLSearchParams } from "url";
import {getItem} from "./../API"
import {Routes, Route, Link, useParams} from "react-router-dom"

// const ItemDetails: React.FC = () => {
export default function ItemDetails() {

    const params = useParams();

    // const params = new URLSearchParams(window.location.href);
    // const itemId = '11067616'; // params.get('itemId');
    const itemId = params.itemId

    const [item, setItem] = useState<IItem>()

    useEffect(() => {
        getItem(itemId)
            .then(({status, data}) => {
                if (status !== 200) {
                    throw new Error(`Failed to get item with itemId ${itemId}`)
                }
                setItem(data.item);
            })
            .catch((err: Error) => { console.log(err)});
    })

    return (
        <div data-id={item?.itemId}>
            <h1>Item Details for {item?.description}</h1>
            <div>
                <h2>{item?.description}</h2>
                <div className="Card--price">
                    {item?.price}
                </div>

                <div className="Card--text">
                    <p>
                        {item?.fullDescription}
                    </p>
                </div>
            </div>

        </div>
        
    )
}
