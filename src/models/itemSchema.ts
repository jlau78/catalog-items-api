
import { IItem } from "./../types/item"
import { model, Schema } from "mongoose"

const itemSchema: Schema = new Schema(
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

export default model<IItem>("Item", itemSchema)