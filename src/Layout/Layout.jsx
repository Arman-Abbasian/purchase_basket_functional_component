import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({children}) => {
    return ( 
        <div className="w-screen h-screen flex justify-center items-center bg-slate-800 p-10">
            <div className="w-full h-full bg-slate-500 container mx-auto drop-shadow-lg rounded-md p-2 relative">
            <Header />
            {children}
            <Footer />
            </div>
        </div>
     );
}
 
export default Layout;