import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    const status = confirm("Bạn có chắc muốn xóa hay không")
    if(status){
      deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin'>
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='update/:id' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
