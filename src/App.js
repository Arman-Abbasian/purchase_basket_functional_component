import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successNotify } from './components/toastify';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import Layout from './Layout/Layout';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import PurchaseBasket from './pages/PurchaseBasket/PurchaseBasket';


function App() {
  const[products,setProducts]=useState(null);
  const [loading,setLoading]=useState(true);
  const [purchasedProducts,setPurchasedProducts]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:4000/products")
    .then((res)=>{
      setLoading(false)
      setProducts(res.data);
      console.log(res.data)
    })
    .catch(err=>toast.error(err.message))
  },[]);

  const addToPurchcaseBasketHandler=(productData)=>{
    console.log(productData)
  }

const decrementHandler=(id)=>{
  const findedProduct=products.find(item=>item.id===id);
  if(findedProduct.productNumber===1){
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(res=>{
      toast.success("the product removed successfully")
      axios.get(`http://localhost:4000/products`)
      .then(res=>setProducts(res.data))
    })
    .catch(err=>toast.error(err.message))
  }else{
    findedProduct.productNumber--;
    axios.put(`http://localhost:4000/products/${id}`,findedProduct)
    .then(res=>{
      axios.get(`http://localhost:4000/products`)
      .then(res=>setProducts(res.data))
    })
    .catch(err=>toast.error(err.message))
  }
};
const incrementHandler=(id)=>{
  const findedProduct=products.find(item=>item.id===id);
  findedProduct.productNumber++;
  console.log(findedProduct)
  axios.put(`http://localhost:4000/products/${id}`,findedProduct)
  .then(res=>{
    axios.get(`http://localhost:4000/products`)
    .then(res=>setProducts(res.data))
  })
  .catch(err=>toast.error(err.message))
};
const removeHandler=(id)=>{
  const findedProduct=products.find(item=>item.id===id);
  axios.delete(`http://localhost:4000/products/${id}`,findedProduct)
  .then(res=>{
    toast.success("the product removed successfully")
    axios.get(`http://localhost:4000/products`)
    .then(res=>setProducts(res.data))
  })
  .catch(err=>toast.error(err.message))


  toast.success("the product deleted successfully")
}
  return (
    
    <div className="App">
      {/* <ToastContainer />
      {loading ? <p className={styles.loading}>loading ...</p>
      :
      products.length===0?<p>no product in basket</p>
      :
      <div className={styles.container}>
        <NavBar />
        <ProductList products={products} 
        onAdd={incrementHandler} onMinus={decrementHandler} onRemove={removeHandler} />
      </div>
      
      } */}
      <Layout>
      {products && 
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/products/:id' element={<ProductDetails addToPurchcaseBasketHandler={addToPurchcaseBasketHandler} />} />
          <Route path='/purchaseBasket' element={<PurchaseBasket />} />
        </Routes>
         }
        
      </Layout>
    </div>
  );
}

export default App;
