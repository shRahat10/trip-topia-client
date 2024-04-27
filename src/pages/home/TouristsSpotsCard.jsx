import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosArrowDropright } from "react-icons/io";

const TouristsSpotsCard = () => {
    const { data } = useContext(AuthContext);

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    data?.slice(0, 6).map((e, idx) => (
                        <div key={idx} className=" space-y-3 shadow border p-4 rounded">
                            <img className=" h-40 w-full object-cover object-center" src={e.image} alt="loading image..." />
                            <p className=" text-2xl font-semibold">{e.spot}</p>
                            <p className=" h-24">{e.description.slice(0, 100)}...</p>
                            <button className=" text-primary font-semibold flex items-center gap-1">View Details <IoIosArrowDropright size={22} /></button>
                        </div>
                    ))
                }
            </div>
            <div className=" w-full flex justify-center">
                {
                    data?.length > 6 && (
                        <button className=" text-primary border border-primary py-2 px-4 rounded">Show More</button>
                    )
                }
            </div>
        </>
    );
};

export default TouristsSpotsCard;