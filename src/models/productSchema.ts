
import { IProduct } from "../types/product"
import { model, Schema } from "mongoose"

const productSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: false,
        },
        itemId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        fullDescription: {
            type: String,
            required: false,
        }, 
        price: {
            type: String,
            required: false,
        },
        thumbnails: {
            type: Array,
            required: false,
        },
        areaCodes: {
            type: Array,
            required: true,
        }

    }

)

export default model<IProduct>("Product", productSchema)