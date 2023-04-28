import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/product'
import { Link } from 'react-router-dom'

interface Iprops {
    products: IProduct[]
}

const ProductPage = (props: Iprops) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    return (
        <div>
            <h1>ProductPage</h1>
            {data.map(item => {
                return (
                    <Link to={`/products/${item.id}`}>
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <h3>{item.cateId}</h3>
                        </div>

                    </Link>
                )
            })}
        </div>
    )
}

export default ProductPage