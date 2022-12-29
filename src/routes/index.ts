import {Router} from "express"
import {getItems, getItem, addItem, updateItem, deleteItem} from "./../controllers/index"

const router: Router = Router()

router.get("/items", getItems)

router.get("/item", getItem)

router.post("/add-item", addItem)

router.put("/edit-item", updateItem)

router.delete("/delete-item", deleteItem)

export default router
