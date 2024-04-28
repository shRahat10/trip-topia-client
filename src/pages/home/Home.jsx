import Banner from "./Banner";
import CountriesCard from "./CountriesCard";
import QuesAndAns from "./QuesAndAns";
import Team from "./Team";
import TouristsSpotsCard from "./TouristsSpotsCard";


const Home = () => {
    return (
        <div className=" space-y-20">
            <Banner></Banner>
            <TouristsSpotsCard></TouristsSpotsCard>
            <CountriesCard></CountriesCard>
            <Team></Team>
            <QuesAndAns></QuesAndAns>
        </div>
    );
};

export default Home;