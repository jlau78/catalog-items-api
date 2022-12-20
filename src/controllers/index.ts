import {Response, Request} from "express"
import {IItem } from "./../types/item"
import Item from "./../models/itemSchema"
import { toUnicode } from "punycode"

const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const items: IItem[] = await Item.find()
        res.status(200).json({items})

    } catch (error) {
        throw error
    }
}

const addItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IItem, "itemId" | "name" | "description" |
         "fullDescription" | "price" | "areaCodes">

        const item: IItem = new Item({
            itemId: body.itemId,
            name: body.name,
            description: body.description,
            fullDescription: body.fullDescription,
            price: body.price,
            areaCodes: body.areaCodes
        })

        const newItem: IItem = await item.save()
        const allItems: IItem[] = await Item.find()

        res
            .status(201)
            .json({message: "Item added", item: newItem, items: allItems})
    } catch (error) {
        throw error
    }

}

const updateItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: {itemId},
            body, 
        } = req
        const updateItem: IItem | null = await Item.findById({_itemId: itemId}, body)
        
        const allItems: IItem[] = await Item.find()
        res.status(200)
            .json({
                message: "Item updated",
                item: updateItem,
                items: allItems,
            })

    } catch (error) {
        throw error
    }

}

const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedItem: IItem | null = await Item.findById(
            req.params.itemId
        )

        const allItems: IItem[] = await Item.find()
        res.status(200)
            .json({
                message: "Item deleted",
                item: deletedItem,
                items: allItems
            })


    } catch (error) {
        throw error
    }
}

export {getItems, addItem, updateItem, deleteItem}