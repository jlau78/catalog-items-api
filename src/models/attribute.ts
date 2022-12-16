
import {IAttribute} from "./../types/attribute"
import {model, Schema} from "mongoose"

const attributeSchema: Schema = new Schema(
    {
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true
        }
    }
)