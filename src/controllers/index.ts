import {Response, Request} from "express"
import {IProduct } from "../types/product"
import Product from "./../models/itemSchema"
import { toUnicode } from "punycode"
import { Query } from "mongoose"
import { timeStamp } from "console"

const getItems = async (req: Request, res: Response): Promise<void> => {
    const start = Math.floor(Date.now())
    try {
        const params = {}
        const sortparams = {
            
        }
        const products: IProduct[] = await Product.find()
        console.log(`getItems: found ${products?.length} products. Metrics: ${Math.floor(Date.now()) - start}ms`)
        res.status(200).json({products})

    } catch (error) {
        throw error
    }

}

const categoryField = 'area'

const getItemsByQuery = async (req: Request, res: Response): Promise<void> => {
    const query = req.params.query

    console.log(`getItemsByQuery with query:${query}`)

    try {
        const products: IProduct[] = await Product.find().where(categoryField, query)
        res.status(200).json({products: products})

    } catch (error) {
        console.log(`FAIL to get item for query:${query}: ${error}`)
        throw error
    }
}

const getItemsByKeywords = async (req: Request, res: Response): Promise<void> => {
    const field = req.query.field;
    const keyword = req.query.keyword;
    const wildcard = req.query.wildcard;
    const exact = req.query.exact;

    try {
        console.log(`getItemsByKeyword-->: ${req.url}, Finding item field:${field} , keyword:${keyword}`)
        const products: IProduct[] = await Product.find().where(field, keyword)

        console.log(`getItemsByKeyword: found ${products?.length} products`)
        if (products === undefined) {
            res.status(404)
                .json({
                    message: `Item with itemId ${field} cannot be found`
                })
        } else {
            res.status(200)
                .json({
                    message: `Item with itemId ${field} found`,
                    products: products
                })
        }
    } catch (error) {
        console.log(`FAIL to get item with ${field}: ${error}`)
        throw error
    }
}

const getItem = async (req: Request, res: Response): Promise<void> => {
    const start = Math.floor(Date.now())
    const itemId = req.params.itemId;
    try {
        console.log(`getItem: Finding item with itemId: ${itemId}`)
        const product: IProduct | null = await Product.findOne({'itemId': itemId});

        console.log(`getItem(${itemId}): Metrics: ${Math.floor(Date.now()) - start}ms`)

        if (product === undefined) {
            res.status(404)
                .json({
                    message: `Item with itemId ${itemId} cannot be found`
                })
        } else {
            res.status(200)
                .json({
                    message: `Item with itemId ${itemId} found`,
                    product: product
                })
        }
    } catch (error) {
        console.log(`FAIL to get item with ${itemId}: ${error}`)
        throw error
    }
    
}

const addItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IProduct, "itemId" | "name" | "description" |
         "fullDescription" | "price" | "areaCodes">
         console.log(`addItem called: body:${body}`)

         if (body === undefined) {
            res.status(500)
                .json({
                    message: 'Empty request. Abort Add Item'
                })
         } else {
            const product: IProduct = new Product({
                itemId: body.itemId,
                name: body.name,
                description: body.description,
                fullDescription: body.fullDescription,
                price: body.price,
                areaCodes: body.areaCodes
            })

            const newItem: IProduct = await product.save()
            const allItems: IProduct[] = await Product.find()
            res
                .status(201)
                .json({message: "Item added", product: newItem, products: allItems})
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
            const allProducts: IProduct[] = await Product.find()
            const updateItem: IProduct | null = await Product.findById({_itemId: itemId}, body)
            console.log(`No item with ${itemId} found to update`)

            res.status(200)
                .json({
                    message: "Product updated",
                    product: updateItem,
                    products: allProducts,
                })
        }

    } catch (error) {
        throw error
    }

}

const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const itemId = req.params.itemId
        const deletedItem: IProduct | null = await Product.findOne(
            {'itemId': itemId}
        )

        console.log(`No item with ${itemId} found to delete`)

        if (deleteItem === undefined) {
            res.status(400)
                .json({
                    message: `No item with ${itemId} found to delete`
                })

        } else {

            const allItems: IProduct[] = await Product.find()
            res.status(200)
                .json({
                    message: "Item deleted",
                    product: deletedItem,
                    products: allItems
                })
        }


    } catch (error) {
        throw error
    }
}

export {getItems, getItemsByQuery, getItem, getItemsByKeywords, addItem, updateItem, deleteItem}