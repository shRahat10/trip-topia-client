import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const TouristsSpotsCard = () => {
    const { data } = useContext(AuthContext);
    const [head] = useTypewriter({
        words: ['Tourist Spot'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })

    return (
        <div>
            <div className='App text-center mb-6'>
                <span className="text-3xl font-semibold dark:text-white">{head}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    data?.slice(0, 6).map((e, idx) => (
                        <div key={idx} className=" space-y-3 shadow border p-4 rounded dark:text-white">
                            <img className=" h-40 w-full object-cover object-center" src={e.image} alt="loading image..." />
                            <p className=" text-2xl font-semibold">{e.spot}</p>
                            <p className=" h-24 overflow-hidden">{e.description}</p>
                            <Link to={`/tourists-spots-details-page/${e._id}`}><button className=" text-primary font-semibold flex items-center gap-1">View Details <IoIosArrowDropright size={22} /></button></Link>
                        </div>
                    ))
                }
            </div>
            <div className=" w-full flex justify-center mt-6">
                {
                    data?.length > 6 && (
                        <Link to={'/tourists-spots'}><button className=" text-primary border border-primary py-2 px-4 rounded">Show More</button></Link>
                    )
                }
            </div>
        </div>
    );
};

export default TouristsSpotsCard;