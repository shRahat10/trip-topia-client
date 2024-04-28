import Banner from "./Banner";
import CountriesCard from "./CountriesCard";
import Team from "./Team";
import TouristsSpotsCard from "./TouristsSpotsCard";


const Home = () => {
    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <TouristsSpotsCard></TouristsSpotsCard>
            <CountriesCard></CountriesCard>
            <Team></Team>
        </div>
    );
};

export default Home;