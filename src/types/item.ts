
import { Document } from "mongoose"

export interface IItem extends Document {
    id?: string
    itemId?: string
    name: string
    description: string
    fullDescription: string
    price: DoubleRange
    areaCodes: Array<string> 

}

