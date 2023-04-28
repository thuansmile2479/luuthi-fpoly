import Product from '../model/products'
import { prodcutSchema } from "../schema/products";

export const getAll = async (req, res) => {
    try {
        const product = await Product.find()
        if(product.length === 0){
            return res.json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.json(product)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.json(product)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const create = async (req, res) => {
    try {
        const { error } = prodcutSchema.validate(req.body)
        if(error) {
            return res.status(400).json({
                message: error.details.map(err => err.message)
            })
        }

        const product = await Product.create(req.body)
        if(!product){
            return res.json({
                message: "Không thêm sản phẩm "
            })
        }
        return res.json({
            message: "Thêm sản phẩm thành công",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const update = async (req, res) => {
    try {  
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!product){
            return res.json({
                message: "Không thêm sản phẩm "
            })
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            data: product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const remove = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: 'Xóa sản phẩm thành công',
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};