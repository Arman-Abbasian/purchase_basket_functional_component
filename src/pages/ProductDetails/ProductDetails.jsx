import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const [loading,setLoading]=useState(true);
    const [productData,setProductData]=useState(null)
    let {id}  = useParams();
    console.log(id);

    useEffect(()=>{
        axios.get(`http://localhost:4000/products/${id}`)
        .then(res=>{
            setLoading(false);
            setProductData(res.data)
        })
        .catch(err=>toast.error(err.message))
    },[])
    return ( 
        <>
        {loading ? <p>loading</p> :
            <div className="p-2 mt-8">
                <div>
                    <img src={productData.productImage} alt="sisako" className="w-full" />
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold">{productData.productName}</h2>
                        <h3 className="text-base font-bold">{productData.carName}</h3>
                        <p>{productData.productDescription}</p>
                    </div>
                    <div className="flex justify-center gap-8 items-center">
                        <div className="flex-1 flex justify-start items-center gap-10">
                            <button>-</button>
                            <p>{productData.productNumber}</p>
                            <button>+</button>
                        </div>
                        <p>{productData.productPrice}</p>
                        <button>add to basket</button>
                    </div>
                </div>
            </div>
        }
        </>
     );
}
 
export default ProductDetails;