import React from "react";

type Props = ItemProps & {
    updateItem: (item: IItem) => void
    deleteItem: (itemId: string) => string
}

const Item: React.FC<Props> = ({item, updateItem, deleteItem}) => {

    return (
        <div className="Card">


        </div>
    )
}

export default Item