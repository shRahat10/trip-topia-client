import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosArrowDropright } from "react-icons/io";


const TouristsSpots = () => {
    const { data } = useContext(AuthContext);
    const [count, setCount] = useState(6)

    const handleSetCount = () => {
        setCount(count + 3);
    }

    return (
        <>
            <h1 className=" mb-8 text-3xl text-center">Tourists Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data?.slice(0, count).map((e, idx) => (
                    <div key={idx} className="shadow-lg border rounded-lg overflow-hidden">
                        <img className="h-40 w-full object-cover object-center" src={e.image} alt="loading image..." />
                        <div className="p-4 bg-white space-y-3">
                            <p className="text-xl font-semibold text-gray-800">{e.spot}</p>
                            <p className="text-gray-600 h-24 overflow-hidden">{e.description}</p>
                            <div className=" space-y-2">
                                <p className="text-gray-700">Cost: ${e.cost} per day</p>
                                <p className="text-gray-700">Visitors: {e.visitors}</p>
                                <p className="text-gray-700">Travel Time: {e.time} days</p>
                                <p className="text-gray-700">Seasonality: {e.seasonality}</p>
                            </div>
                            <button className="text-white bg-primary hover:bg-primary-dark font-semibold py-2 px-4 rounded flex items-center gap-1">
                                View Details <IoIosArrowDropright size={22} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" w-full flex justify-center mt-10">
                {
                    data?.length > 6 && count < data?.length && (
                        <button onClick={handleSetCount} className=" text-primary border border-primary py-2 px-4 rounded">Show More</button>
                    )
                }
            </div>

        </>
    );
};

export default TouristsSpots;