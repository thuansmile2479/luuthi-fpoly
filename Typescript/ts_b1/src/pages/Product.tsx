import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import { Link } from 'react-router-dom'
import '../App.css'

interface IProps {
    products: IProduct[],
}

const ProductPage = (props: IProps) => {

    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])


    return (
        <div className='pro1'>
            <h1>Product</h1>
            <div className='pro3'>
                {data.map(item => {
                    return (
                        <Link to={'/products/' + item.id}>
                            <div className='pro2' key={item.id}>
                                <h3>Name: {item.name}</h3>
                                <h5 className='price'>Price: {item.price}</h5>
                                <h5>Category: {item.gender}</h5>

                            </div>
                        </Link>
                    )
                })}
            </div>
            <Link to={'/admin/products'}>Product Management</Link>
            
        </div>
    )
}

export default ProductPage