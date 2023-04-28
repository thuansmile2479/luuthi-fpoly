import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IProduct } from '../types/product'
import '../App.css'

interface IProps {
  products: IProduct[],
}

const ProductDetailPage = (props: IProps) => {

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<{
    id: number,
    name: string,
    price: number,
    gender: string,
  } | {}>({})

  useEffect(() => {
    const currentProduct = props.products.find((item) => item.id === Number(id))
    setProduct(currentProduct ?? {})
  }, [id, props.products])

  return (
    <div >
      <h1>Product Detail</h1>
      <div className='detail'>
        <h3>Name: {(product as { name: string })?.name}</h3>
        <h3 className='price'>Price: {(product as { price: number })?.price}</h3>
        <h3>Category: {(product as { gender: number })?.gender}</h3>
      </div>
      <Link to={'/products'}>Products</Link>

    </div>
  )
}

export default ProductDetailPage