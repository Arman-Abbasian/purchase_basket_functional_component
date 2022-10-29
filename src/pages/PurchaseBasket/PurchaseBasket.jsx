import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";


const PurchaseBasket = () => {
    const [purchasedItem,setPurchasedItems]=useState(null);
    const [totalPrice,setTotalPrice]=useState(0);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.get(`http://localhost:4000/productBasket`)
        .then(res=>{
            const data=res.data;
            setPurchasedItems(data);
            setLoading(false);
            calculationPrice(data);  
        })
        .catch(err=>toast.error(err.message));
    },[]);

    const removePurchasedProduct=(id)=>{
        axios.delete(`http://localhost:4000/productBasket/${id}`)
        .then(res=>{
            axios.get(`http://localhost:4000/productBasket`)
            .then(res=>{
                setPurchasedItems(res.data);
                calculationPrice(res.data); 
                setPurchasedItems((state)=>{
                    return state;
                })
            })
        })
        .catch(err=>toast.error(err.message))
    };
    
    const calculationPrice=(data)=>{
        const productsPrice=data.reduce((accumulator, currentValue) => {
          return  accumulator + parseInt((currentValue.productPrice.split(" "))[0])
        },0);
        setTotalPrice(productsPrice)
    };


    return ( 
        <div className="p-2 mt-10 flex flex-col gap-10">
            {loading ? <p>loading ...</p>:
                purchasedItem.map(item=>{
                    return <div key={item.id} className="flex justify-between items-center gap-2 h-16">
                    <p className="w-16 h-full flex justify-center items-center rounded-full bg-slate-700"><img className="w-full h-full rounded-full" src={item.productImage} alt="sisako" /></p>
                    <p className="w-32 h-full flex justify-center items-center rounded-full bg-slate-700">{item.productName}</p>
                    <p className="w-16 h-full flex justify-center items-center rounded-full bg-slate-700">{item.productNumber}</p>
                    <p className="w-16 h-full flex justify-center items-center rounded-full bg-slate-700">{item.productPrice}</p>
                    <p onClick={()=>removePurchasedProduct(item.id)}><AiOutlineDelete className="w-6 h-full text-red-800" /></p>
                </div>
                })
            
            }
           <div className="flex justify-start items-center">
            <div className="flex-1">total cost:<span className="text-blue-800"> {totalPrice} $</span></div>
                <button className="bg-blue-700 px-4 py-2 rounded-md">pay</button>
           </div>
        </div>
     );
}
 
export default PurchaseBasket;