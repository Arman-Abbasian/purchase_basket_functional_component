import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    },[]);

    const decrementHandler=()=>{
       if( productData.productNumber!==1){
        const cloneObject={...productData};
        cloneObject.productNumber--;
         setProductData(cloneObject)
       }
    };
    const incrementHandler=()=>{
        const cloneObject={...productData};
        cloneObject.productNumber++;
         setProductData(cloneObject)
     }

     const addToPurchcaseBasketHandler=()=>{
        const price=parseInt ((productData.productPrice.split(" ")[0]));
        const data={id:productData.id,productImage:productData.productImage,productName:productData.productName,productNumber:productData.productNumber,productPrice:((productData.productNumber)*price)+" $"};
        console.log(data)
        axios.post(`http://localhost:4000/productBasket`,data)
    .then(res=>{
        toast.success("Prodcut add to your basket successfully")
    })
        .catch(err=>toast.error(err.message))
     }
    return ( 
        <>
        {loading ? <p>loading</p> :
            <div className="p-2 mt-8">
                <div>
                    <img src={productData.productImage} alt="sisako" className="w-full h-56 rounded-md" />
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">{productData.productName}</h2>
                        <h3 className="text-base font-bold">{productData.carName}</h3>
                        <p>{productData.productDescription}</p>
                    </div>
                    <div className="flex justify-center gap-8 items-center">
                        <div className="flex-1 flex justify-start items-center gap-1">
                            <button onClick={decrementHandler} className="bg-blue-700 w-6 h-6 flex justify-center items-center rounded-sm">-</button>
                            <p className="bg-blue-700 w-12 h-6 flex justify-center items-center rounded-sm">{productData.productNumber}</p>
                            <button onClick={incrementHandler}  className="bg-blue-700 w-6 h-6 flex justify-center items-center rounded-sm">+</button>
                        </div>
                        <p className="text-blue-900">{productData.productPrice}</p>
                        <button onClick={addToPurchcaseBasketHandler} className="bg-blue-700  py-2 px-6 flex justify-center items-center rounded-sm">Add</button>
                    </div>
                </div>
            </div>
        }
        </>
     );
}
 
export default ProductDetails;