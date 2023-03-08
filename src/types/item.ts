
import { Document } from "mongoose"

export interface IItem extends Document {
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
    created: string
    updated: string
    isBold: string

}
export interface IAttribute {
    key: string
    value: string
}

