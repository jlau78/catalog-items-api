import {Response, Request} from "express"
import {IItem } from "./../types/item"
import Item from "./../models/itemSchema"
import { toUnicode } from "punycode"
import { Query } from "mongoose"

const getItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const items: IItem[] = await Item.find()
        res.status(200).json({items})

    } catch (error) {
        throw error
    }
}

const categoryField = 'area_codes'

const getItemsByQuery = async (req: Request, res: Response): Promise<void> => {
    const query = req.params.query

    console.log(`getItemsByQuery with query:${query}`)

    try {
        const q = new Query()
        const items: IItem[] = await Item.find().where(categoryField, query)
        res.status(200).json({items})

    } catch (error) {
        throw error
    }
}


const getItemByKeywords = async (req: Request, res: Response): Promise<void> => {
    const field = req.params.field;
    const keyword = req.params.keyword;
    const wildcard = req.params.wildcard;
    const exact = req.params.exact;

    try {
        console.log(`getItem: Finding item with itemId: ${field}`)
        const item: IItem | null = await Item.findOne({field: [keyword]});

        if (item === undefined) {
            res.status(404)
                .json({
                    message: `Item with itemId ${field} cannot be found`
                })
        } else {
            res.status(200)
                .json({
                    message: `Item with itemId ${field} found`,
                    item: item
                })
        }
    } catch (error) {
        console.log(`FAIL to get item with ${field}: ${error}`)
    }
}

const getItem = async (req: Request, res: Response): Promise<void> => {
    const itemId = req.params.itemId;
    try {
        console.log(`getItem: Finding item with itemId: ${itemId}`)
        const item: IItem | null = await Item.findOne({'itemId': itemId});

        if (item === undefined) {
            res.status(404)
                .json({
                    message: `Item with itemId ${itemId} cannot be found`
                })
        } else {
            res.status(200)
                .json({
                    message: `Item with itemId ${itemId} found`,
                    item: item
                })
        }
    } catch (error) {
        console.log(`FAIL to get item with ${itemId}: ${error}`)
    }
}

const addItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IItem, "itemId" | "name" | "description" |
         "fullDescription" | "price" | "areaCodes">
         console.log(`addItem called: body:${body}`)

         if (body === undefined) {
            res.status(500)
                .json({
                    message: 'Empty request. Abort Add Item'
                })
         } else {
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
        } 
        
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

        if (itemId === undefined) {
            res.status(400)
                .json({
                    message: `itemId param is undefined. Abort update item.`
                })

        } else {
            const allItems: IItem[] = await Item.find()
            const updateItem: IItem | null = await Item.findById({_itemId: itemId}, body)
            console.log(`No item with ${itemId} found to update`)

            res.status(200)
                .json({
                    message: "Item updated",
                    item: updateItem,
                    items: allItems,
                })
        }

    } catch (error) {
        throw error
    }

}

const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const itemId = req.params.itemId
        const deletedItem: IItem | null = await Item.findOne(
            {'itemId': itemId}
        )

        console.log(`No item with ${itemId} found to delete`)

        if (deleteItem === undefined) {
            res.status(400)
                .json({
                    message: `No item with ${itemId} found to delete`
                })

        } else {

            const allItems: IItem[] = await Item.find()
            res.status(200)
                .json({
                    message: "Item deleted",
                    item: deletedItem,
                    items: allItems
                })
        }


    } catch (error) {
        throw error
    }
}

export {getItems, getItemsByQuery, getItem, getItemByKeywords, addItem, updateItem, deleteItem}