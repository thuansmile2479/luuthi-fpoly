import express from 'express'
import { getAll, get, create, remove, update } from '../controller/products'


const router = express.Router();
router.get('/products', getAll)
router.get('/products/:id', get)
router.post('/products', create)
router.delete('/products/:id', remove)
router.put('/products/:id', update)

export default router