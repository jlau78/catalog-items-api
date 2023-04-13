
import { Document } from "mongoose"

export interface IProduct extends Document {
    id?: string
    itemId?: string
    name: string
    description: string
    fullDescription: string
    price: string
    area: string
    areaCodes: string[]
    featureList: IAttribute[]
    thumbnails: string[]
    isBold: string
    created: Date
    updated: Date


}
export interface IAttribute {
    key: string
    value: string
}

