import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const TouristsSpots = () => {
    const { data } = useContext(AuthContext);
    const [count, setCount] = useState(6);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSetCount = () => {
        setCount(count + 3);
    }

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const sortedData = data ? [...data].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.cost - b.cost;
        } else {
            return b.cost - a.cost;
        }
    }) : [];

    return (
        <div>
            <Helmet>
                <title>Trip Topia | Tourists Spots</title>
            </Helmet>
            <div className="flex justify-start items-center gap-3 mb-4 mr-4  dark:text-white">
                <p>Cost Filter: </p>
                <select onChange={toggleSortOrder} className="border dark:bg-transparent border-gray-400 rounded px-2 py-1 focus:outline-primary">
                    <option className="dark:text-black" value="asc">Low - High</option>
                    <option className="dark:text-black"value="desc">High - Low</option>
                </select>
            </div>
            <h1 className=" mb-8 text-3xl text-center">Tourists Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    sortedData?.slice(0, count).map((e, idx) => (
                        <div key={idx} className="shadow-lg border rounded-lg overflow-hidden">
                            <img className="h-40 w-full object-cover object-center" src={e.image} alt="loading image..." />
                            <div className="p-4 bg-transparent space-y-3 ">
                                <p className="text-xl font-semibold text-gray-800 dark:text-white">{e.spot}</p>
                                <p className="text-gray-600 dark:text-white h-24 overflow-hidden">{e.description}</p>
                                <div className=" space-y-2 text-gray-700 dark:text-white">
                                    <p><span className=" font-bold">Average Cost:</span> ${e.cost} per day</p>
                                    <p><span className=" font-bold">Visitors:</span> {e.visitors}</p>
                                    <p><span className=" font-bold">Travel Time:</span> {e.time} days</p>
                                    <p><span className=" font-bold">Seasonality:</span> {e.seasonality}</p>
                                </div>
                                <Link to={`/tourists-spots-details-page/${e._id}`}>
                                    <button className="mt-4 text-white bg-primary hover:bg-primary-dark font-semibold py-2 px-4 rounded flex items-center gap-1">
                                        View Details <IoIosArrowDropright size={22} />
                                    </button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=" w-full flex justify-center mt-10">
                {
                    data?.length > 6 && count < data?.length && (
                        <button onClick={handleSetCount} className=" text-primary border border-primary py-2 px-4 rounded">Show More</button>
                    )
                }
            </div>

        </div>
    );
};

export default TouristsSpots;