import {AiFillHome } from "react-icons/ai";
import { SiGmail, } from "react-icons/si";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
const Footer = () => {
    return ( 
                <footer className="flex flex-col items-start justify-start gap-2 absolute bottom-2 left-2">
                    <div className="flex justify-start items-center gap-3"><AiFillHome className="text-blue-800" /><p>karaj-siminDasht-street8-pelak 146</p></div>
                    <div className="flex justify-start items-center gap-3"><BsFillTelephoneInboundFill className="text-blue-800" /><p>02674158521</p></div>
                    <div className="flex justify-start items-center gap-3"><SiGmail className="text-blue-800" /><p>sisako2002@gmail.com</p></div>
                </footer>
     );
}
 
export default Footer;