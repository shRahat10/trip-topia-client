import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constent/constent";


const MyLists = () => {
    const { data, handleUpdateData, user } = useContext(AuthContext);
    const filterData = data?.filter((e) => e.email === user?.email);
    const [count, setCount] = useState(5);

    const formatDate = (timestamp) => {
        if (!timestamp) return "";
        const date = new Date(parseInt(timestamp));
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleSetCount = () => {
        setCount(count + 3);
    }

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(BASE_URL + `/tourists-spots/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            handleUpdateData(id);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="relative w-fit mx-auto mb-20 text-center">
                <img className="w-36 h-36 rounded-full object-center object-cover mx-auto mb-4" src={user.photoURL} alt="Profile" />
                <h1 className="text-xl font-bold text-gray-700">{user.displayName}</h1>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-500">Member Since: {formatDate(user.metadata.createdAt)}</p>
                <Link className="absolute top-0 right-0">
                    <button className="p-2">
                        <FaRegEdit size={23} />
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {filterData?.slice(0, count).map((e, idx) => (
                    <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-2 bg-white rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover object-center rounded-lg" src={e.image} alt="loading image..." />
                        <div className="p-4 lg:col-span-2 flex flex-col justify-between">
                            <div>
                                <p className="text-xl font-semibold text-gray-800">{e.spot}</p>
                                <p className="text-gray-600 mt-2">{e.location}, {e.country}</p>
                                <p className="text-lg text-gray-600 mt-2">{e.description}</p>
                            </div>
                            <div className=" flex justify-between items-center">
                                <Link to={`/tourists-spots-details-page/${e._id}`} className="mt-2 text-primary font-semibold flex items-center gap-1">
                                    View Details <IoIosArrowDropright size={22} />
                                </Link>
                                <div>
                                    <Link to={`/update-tourists-spots/${e._id}`}><button className=" p-2"><FaRegEdit size={23} /></button></Link>
                                    <button onClick={() => handleDelete(e._id)} className=" p-2 text-red-500"><RiDeleteBin2Line teForever size={25} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" w-full flex justify-center mt-10">
                {
                    filterData?.length > 5 && count < filterData?.length && (
                        <button onClick={handleSetCount} className=" text-primary border border-primary py-2 px-4 rounded">Show More</button>
                    )
                }
            </div>
        </div>
    );
};

export default MyLists;