import {Document} from "mongoose"

export interface IAttribute extends Document {
    key: string
    value: string
}

