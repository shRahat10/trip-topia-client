import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" text-white bg-transparent py-6 mt-16">
            <div className=" flex justify-between items-center mb-6">
                <div>
                    <h1 className=" font-bold text-3xl">Trip Topia</h1>
                    <p className=" text-lg mt-2">Explore. Dream. Discover.</p>
                </div>
                <div className=" flex gap-2">
                    <a href="https://www.facebook.com/"><FiFacebook size={25} /></a>
                    <a href="https://twitter.com/"><FaXTwitter size={25} /></a>
                    <a href="https://www.instagram.com/"><FaInstagram size={25} /></a>
                </div>
            </div>
            <hr />
            <div className=" my-6 grid grid-cols-1 text-center gap-6 md:text-start md:gap-0 md:grid-cols-3">
                <div className=" space-y-2">
                    <h1 className=" text-lg font-bold">Company</h1>
                    <p>Blog</p>
                    <p>Privacy Policy</p>
                    <p>Term and Conditions</p>
                </div>
                <div className=" space-y-2">
                    <h1 className=" text-lg font-bold">Contact Us</h1>
                    <p>Dhaka, Bangladesh</p>
                    <p><a href="mailto:shahriar.haque@gmail.com">shahriar.haque@gmail.com</a></p>
                    <p>01600******</p>
                </div>
                <div className=" space-y-2 justify-self-end">
                    <p className="text-lg font-bold">Discover the Wonders</p>
                    <p>Every destination has a story to tell. Open your heart to new experiences and let the journey unfold.</p>
                    <Link to={'/register'}><button className=" mt-2 bg-primary px-4 py-1 font-semibold rounded-md">Join Now</button></Link>
                </div>
            </div>
            <hr />
            <p className=" text-center mt-8">© 2024 Trip Topia. All rights reserved.</p>
        </div>
    );
};

export default Footer;