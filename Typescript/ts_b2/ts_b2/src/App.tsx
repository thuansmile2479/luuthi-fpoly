import { useState, useEffect } from 'react'
import { getAllCategory, getOneCategory } from './api/category'
import { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct } from './api/product'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetaiPage from './pages/ProductDetaiPage'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import ProductManagemantPage from './pages/admin/ProductManagemantPage'
import { IProduct } from './types/product'
import { Routes, Route, useNavigate } from 'react-router-dom'


function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data))
  }, [])

  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])

  const navigate = useNavigate()

  const onHandeRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter(item => item.id !== Number(id))))
      .then(() => location.reload())
  }

  const onHandeAdd = (product: IProduct) => {
    addProduct(product).then(() => {
      navigate('/admin/products')
    })
      .then(alert("ADD thành công"))
      .then(() => location.reload())
  }

  const onHandeUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
      .then(() => {
        navigate('/admin/products')
      })
      .then(() => location.reload())
  }



  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} />} />
          <Route path='products/:id' element={<ProductDetaiPage product={products} />} />
        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route index element={<ProductManagemantPage products={products} onRemove={onHandeRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandeAdd} categories={categories} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onHandeUpdate} categories={categories} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
