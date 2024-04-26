import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const Root = () => {
    return (
        <>
            <div className=" max-w-[1440px] mx-auto p-5 font-poppins font-medium">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className=" max-w-[1440px] mx-auto px-5 p-10 font-poppins font-medium">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;