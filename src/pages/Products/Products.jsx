import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../images/logo.png"
const Products = ({products}) => {
    console.log(products)
    return ( 
        
        <div className="mt-10 flex flex-col gap-4 max-h-96 overflow-y-auto">
            {
        products.map(item=>{
            return <div key={item.id} className="flex border-2 border-slate-800 rounded-md  relative h-56 drop-shadow-lg">
        <div className="flex-1 p-2 w-full h-full bg-slate-800 flex justify-center items-center"><img src={item.productImage} alt="sisako"/></div>
            <div className="flex-1 flex flex-col  justify-between gap-8 p-2">
                <div className="flex flex-col justify-between">
                    <h2 className="text-xl font-bold">{item.productName}</h2>
                    <h3 className="text-base font-bold">{item.carName}</h3>
                </div>
                <div className="flex justify-end items-center gap-4">
                        <p>{item.productPrice}</p>
                        <button className="px-8 py-2 rounded-lg bg-blue-700"><Link to={`/products/${item.id}`}>select</Link></button>
                </div>

            </div>
        </div>
        })    
        
        
        }
        </div>
     );
}
 
export default Products;