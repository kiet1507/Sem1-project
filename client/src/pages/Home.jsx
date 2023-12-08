import Banner from '../components/Banner/Banner';
import Brands from "../components/Brands/Brands";
import Gallery from "../components/Gallery/Gallery";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <Gallery/>
            <Brands />
            <Footer/>
        </div>
    )
}

export default Home;