import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

import cover206 from './images/206.webp';
import coverPeykan from './images/peykan.webp';
import coverPride from './images/prid-pc.webp';
import coverTiba from './images/tiba.webp';
import coverXU from './images/XU-..webp';

function App() {
  const[products,setProducts]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    axios.get("http://localhost:4000/products")
    .then((res)=>{
      setLoading(false)
      setProducts(res.data);
      console.log(res.data)
    })
    .catch(err=>console.log(err))
  },[])
const decrementHandler=(id)=>{
  const findedProduct=products.find(item=>item.id===id);
  if(findedProduct.productNumber===1){
    axios.delete(`http://localhost:4000/products/${id}`)
    .then()
    .catch(err)
  }else{
    findedProduct.productNumber--;
    //axios.put("http://localhost:4000/products",{findedProduct})
  }
};
const incrementHandler=(id)=>{
  console.log(id)
};
const removeHandler=(id)=>{
  console.log(id)
}
  return (
    <div className="App">
      {loading ? <p className={styles.loading}>loading ...</p>
      :
      products.length===0?<p>no product in basket</p>
      :
      <div className={styles.container}>
        <NavBar />
        <ProductList products={products} 
        onAdd={incrementHandler} onMinus={decrementHandler} onRemove={removeHandler} />
      </div>
      
      }
    </div>
  );
}

export default App;
