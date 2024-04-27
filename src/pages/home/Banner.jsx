import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";

const Banner = () => {
    const { data } = useContext(AuthContext);

    return (
        <div className="">
            <Swiper
                modules={[Navigation, A11y, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            >
                {data?.slice(3, 9).map((e, idx) => (
                    <SwiperSlide key={idx} style={{ backgroundImage: `url(${e.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', '@media (minWidth: 640px)': { height: '700px' } }}>
                        <div className="absolute inset-0 bg-black opacity-35"></div>
                        <div className="text-white z-10 absolute text-center w-full top-1/3 space-y-6">
                            <h1 className=" text-xl xl:text-2xl font-light">{e.country}</h1>
                            <p className=" text-3xl lg:text-6xl xl:text-7xl">{e.spot}</p>
                            <Link to={`/tourists-spots-details-page/${e._id}`}><button className=" mt-6 text-sm border-2 border-primary rounded-full py-2 px-4">View Details</button></Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
