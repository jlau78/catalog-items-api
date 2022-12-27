
import React from "react";

// Intersection type: combining attributes of types using '&' hence {item, updateItem, deleteItem}.
// ItemProps.item attribute is combined. 
type Props = ItemProps & {
    updateItem: (item: IItem) => void
    deleteItem: (itemId: string) => void
}

const Item: React.FC<Props> = ({item,  updateItem, deleteItem}) => {

    return (
        <div className="Card">
            <div className="Card-text">
                <h1>{item.name}</h1>
                <span>{item.description}</span>
            </div>
            <div className="Card-button">
                <button onClick={() => updateItem(item)}
                className="Card-button__done">Update</button>
            </div>

            <br/>
            <div className="Card-button">
                <button onClick={() => deleteItem(item.itemId)}
                className="Card-button__delete">
                    Delete
                </button>
            </div>
        </div>

    )
}

export default Item