import styles from './product.module.css';

import { AiOutlineDelete,AiFillCar,AiFillSetting,AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
const Product = ({productName,carName,productNumber,productPrice,productImage,onMinus,onAdd,onRemove}) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.imgAndDescriptionSection}>
                <div className={styles.imageContainer}>
                    <img src={productImage} alt="image" />
                </div>
                <div className={styles.productDatails}>
                    <div>
                    <div className={styles.descSection}>
                        <AiFillSetting />
                        <p>{productName}</p>
                    </div>

                    <div className={styles.descSection}>
                        <AiFillCar />
                        <p>{carName}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.productNumber}>
                <p onClick={onMinus} className={`${styles.decrement} ${styles.button}`}>{productNumber===1 ? <AiOutlineDelete /> :< AiOutlineMinus/>}</p>
                <p>{productNumber}</p>
                <p onClick={onAdd} className={`${styles.increment} ${styles.button}`}>< AiOutlinePlus/></p>
            </div>
            <p onClick={onRemove} className={`${styles.delete} ${styles.button}`}><AiOutlineDelete /></p>
            <p>{productPrice}</p>
        </div>
     );
}
 
export default Product;