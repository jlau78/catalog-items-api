import React, {useState, useEffect} from "react";
import {getItems} from "./../API"
import useStyles from "./../assets/style"

const ItemListing: React.FC = () => {

    // const classes = useStyles()
    const [items, setItems] = useState<IItem[]>([])

    useEffect(() => {
        handleGetItems()
    }, []);


    const handleGetItems = () => {
        getItems()
            .then(({status, data}) => {
                if (status !== 200) {
                    throw new Error("Error. Failed to getItems");
                }
                setItems(data.items)
            })
            .catch((err: Error) => console.log(err))
    }

    return (

        <div>
            <h2>Search Listings </h2>
            <div>
                <span><label className="Card--label">Area:</label>
                    <input className="Card--input" type="text" id="area-search" />
                </span>
                <button className="Card--button"
                    onClick={() => handleGetItems()}>
                        Get Items
                </button>
            </div>
            {items.map((item: IItem, idx: number) => (
                <div className="Listing--container">
                    <span>{item.name}</span>
                    <div className="Card--container" id={item.itemId}>
                            <div className="Card--text__heading">
                                <h3>{item.name}</h3>
                                <h4>{item.description}</h4>
                                <p>{item.price}</p>
                            </div>
                            <div className="Card--text__content">
                                <p>{idx+1} - {item.fullDescription}</p>
                            </div>
                    </div>
                    <div className="Card--thumbnail__images">
                        <img src={item.thumbnails} className="Card--thumbnail__img"
                            alt="Main"/>

                    </div>
                </div>
                )
            )}

        </div>

    )
}

export default ItemListing;
