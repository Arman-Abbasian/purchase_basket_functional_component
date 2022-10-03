import Product from "../Product/Product";
import styles from './productList.module.css';

const ProductList = ({products,onMinus,onAdd,onRemove}) => {
    return ( 
        <div className={styles.container}>
            {products.map(product=>{
               return <Product key={product.id} productName={product.productName} 
                carName={product.carName} productNumber={product.productNumber}
                 productPrice={product.productPrice} productImage={product.productImage} 
                 onMinus={()=>onMinus(product.id)} 
                 onAdd={()=>onAdd(product.id)} 
                 onRemove={()=>onRemove(product.id)}/>
            })}
        </div>
     );
}
 
export default ProductList;