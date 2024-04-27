import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const CountriesCard = () => {
    const { dataCountry } = useContext(AuthContext);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    dataCountry?.map((e, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="h-56 w-full object-cover object-center rounded-t-lg" src={e.image} alt="Country" />
                            <div className="p-4">
                                <p className="text-xl font-semibold mb-2 text-primary">{e.country}</p>
                                <p className="text-gray-700 h-24 overflow-hidden">{e.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full flex justify-center mt-4">
                {dataCountry?.length > 6 && (
                    <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300">Show More</button>
                )}
            </div>
        </>
    );
};

export default CountriesCard;