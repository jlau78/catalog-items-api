// import { request, response } from "express"
// import { describe } from "node:test"
// import {getItems, getItemsByKeywords, getItemsByQuery} from "../controllers/index"
// import {IItem} from "../types/item"

const request = require("supertest")
const testApp = require("../controllers/index")

// function test_getItemByKeywords() {

//     req: Request = new request()
//     res: Response = response()

    

//     items: IItem = getItemsByKeywords(req, res)
// }

describe('Test API calls to mongodb', () => {
    test('getItemsByKeyswords returns items for the given query', () => {
        request(testApp)
            .getItemsByKeywords()
            
    })

});