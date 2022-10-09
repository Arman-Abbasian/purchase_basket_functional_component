import { Link } from "react-router-dom";
import { FaHome,FaShoppingCart} from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import logo from '../../images/logo.png';


const links=[
    {id:1,to:"/",name:"home",icon:<FaHome className="w-10 h-10" />},
    {id:1,to:"/products",name:"products",icon:<AiFillShop className="w-10 h-10" />},
    {id:1,to:"/purchaseBasket",name:"purchaseBasket",icon:<FaShoppingCart className="w-10 h-10" />}
]


const Header = () => {
    return ( 
                <nav className="flex justify-between items-center">
                    <ul className="flex flex-col flex-start gap-4">
                       {links.map(item=>{
                        return <li><Link to={item.to}>{item.icon}</Link></li>
                       })}
                    </ul>
                    <div><img src={logo} alt="sisako" /> </div>
                </nav>
     );
}
 
export default Header;