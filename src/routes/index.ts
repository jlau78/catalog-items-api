import {Router} from "express"
import {getItems, getItemsByQuery, getItem, getItemByKeywords, addItem, updateItem, deleteItem} from "./../controllers/index"

const router: Router = Router()

router.get('/items', getItems)

router.get('/items/:query', getItemsByQuery)

router.get('/item/:itemId', getItem)

router.post('/add-item', addItem)

router.put('/edit-item', updateItem)

router.delete('/delete-item', deleteItem)

export default router
