import Hero from "../components/Hero";
import FeaturedDIshes from "../components/FeaturedDishes";
import Gallery from "../components/Gallery";

function Home(){
    return(
        <>
        <header>
            <Hero />
        </header>

        <FeaturedDIshes />
        <Gallery />
        </>
    );
}

export default Home;