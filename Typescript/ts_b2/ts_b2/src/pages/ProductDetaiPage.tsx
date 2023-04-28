import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetaiPage = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=> {
        const currentproduct = props.product.find(item => item.id === Number(id))
        setProduct(currentproduct)
    }, [props])
  return (
    <div>
        <h1>ProductDetaiPage</h1>
        <h3>{product?.name}</h3>
        <h3>{product?.price}</h3>
    </div>
  )
}

export default ProductDetaiPage