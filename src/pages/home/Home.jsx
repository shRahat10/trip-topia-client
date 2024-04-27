import Banner from "./Banner";
import CountriesCard from "./CountriesCard";
import TouristsSpotsCard from "./TouristsSpotsCard";


const Home = () => {
    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <TouristsSpotsCard></TouristsSpotsCard>
            <CountriesCard></CountriesCard>
        </div>
    );
};

export default Home;