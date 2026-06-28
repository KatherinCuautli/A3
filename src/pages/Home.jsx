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
        <script src="script.js"></script>

        <footer>
            <div className="footer-content">
                <div className="business-hours">
                    <h3>Business Hours</h3>
                    <p>Monday - Thursday: 11 AM - 9 PM</p>
                    <p>Friday - Sunday: 11 AM - 11 PM</p>
                </div>
        
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com" target="_blank">
                        Facebook
                    </a>
        
                    <a href="https://www.instagram.com" target="_blank">
                        Instagram
                    </a>
        
                    <a href="https://www.tiktok.com" target="_blank">
                        TikTok
                    </a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Home;