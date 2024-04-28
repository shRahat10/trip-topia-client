import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { useParams } from "react-router-dom";


const TouristsSpotsDetailsPage = () => {
    const { id } = useParams();
    const { data } = useContext(AuthContext);

    const details = data?.find((e) => e._id === id);


    return (
        <div className="container mx-auto px-4 py-8">
            {details ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
                    <img src={details.image} alt={details.spot} className=" rounded-md w-full h-80 object-cover mr-8" />
                    <div className=" flex flex-col lg:space-y-2 xl:space-y-4">
                        <div>
                            <h2 className="text-2xl font-bold">{details.spot}</h2>
                            <p>{details.location}, {details.country}</p>
                        </div>
                        <p>{details.description}</p>
                        <p><strong>Average Cost:</strong> ${details.cost} per person</p>
                        <p><strong>Seasonality:</strong> {details.seasonality}</p>
                        <p><strong>Travel Duration:</strong> {details.time} days</p>
                        <p><strong>Expected Visitors:</strong> {details.visitors}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TouristsSpotsDetailsPage;