import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";


const Root = () => {
    return (
        <>
            <div className=" bg-gray-200">
                <div className="max-w-[1440px] mx-auto px-[5%]">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className=" max-w-[1440px] mx-auto px-[5%] font-poppins font-medium">
                <Outlet></Outlet>
            </div>
            <div className=" bg-footer">
                <div className="max-w-[1440px] mx-auto px-[5%]">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Root;