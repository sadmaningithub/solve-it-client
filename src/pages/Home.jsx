import Banner from "../components/Banner/Banner";
import Faq from "../components/FAQ/Faq";
import Feature from "../components/Feature/Feature";


const Home = () => {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <Banner></Banner>
            <Feature></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;