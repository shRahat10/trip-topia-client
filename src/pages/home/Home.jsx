import Banner from "./Banner";
import CountriesCard from "./CountriesCard";
import QuesAndAns from "./QuesAndAns";
import Team from "./Team";
import TouristsSpotsCard from "./TouristsSpotsCard";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className=" space-y-20">
            <Helmet>
                <title>Trip Topia | Home</title>
            </Helmet>
            <Banner></Banner>
            <TouristsSpotsCard></TouristsSpotsCard>
            <CountriesCard></CountriesCard>
            <Team></Team>
            <QuesAndAns></QuesAndAns>
        </div>
    );
};

export default Home;