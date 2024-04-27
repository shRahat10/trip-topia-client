import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";


const MyLists = () => {
    const { data, user } = useContext(AuthContext);
    const filterData = data?.filter((e) => e.email === user?.email)

    return (
        <div className="grid grid-cols-1 gap-6">
            {filterData?.map((e, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-2 bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="h-60 w-full object-cover object-center rounded-lg" src={e.image} alt="loading image..." />
                    <div className="p-4 lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <p className="text-xl font-semibold text-gray-800">{e.spot}</p>
                            <p className="text-gray-600 mt-2">{e.location}, {e.country}</p>
                            <p className="text-lg text-gray-600 mt-2">{e.description}</p>
                        </div>
                        <Link to={`/tourists-spots-details-page/${e._id}`} className="mt-2 text-primary font-semibold flex items-center gap-1">
                            View Details <IoIosArrowDropright size={22} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyLists;