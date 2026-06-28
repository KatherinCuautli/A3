import Hero from "../components/Hero";
import FeaturedDIshes from "../components/FeaturedDishes";

function Home(){
    return(
        <>
        <header>
            <Hero />
        </header>

        <FeaturedDIshes />
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="slider-container">
                <button id="prevB">❮</button>
                <img id="sliderImage"
                     src="images/enchiladas.jpg"
                     alt="Gallery Image"/>
                <button id="nextB">❯</button>
            </div>
        </section>
        </>
    );
}

export default Home;