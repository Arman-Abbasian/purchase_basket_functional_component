const Products = () => {
    return ( 
        <div className="w-screen h-screen flex justify-center items-center bg-slate-800 p-10">
        <div className="w-full h-full bg-slate-500 container mx-auto drop-shadow-lg rounded-md">
            <nav>
                <ul className="flex flex-start gap-4">
                   {links.map(item=>{
                    return <li><Link to={item.to}>{item.icon}</Link></li>
                   })}
                </ul>
            </nav>
        </div>
    </div>
     );
}
 
export default Products;