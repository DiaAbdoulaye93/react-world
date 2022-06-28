import Countries from "../componnents/Countries";
import Logo from "../componnents/Logo";
import Navigation from "../componnents/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <Countries />
        </div>

    );
};
export default Home;