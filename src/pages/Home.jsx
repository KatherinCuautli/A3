import tacos from "../assets/tacos.jpg"
import enchiladas from "../assets/enchiladas.jpg"
import quesadillas from "../assets/quesadillas.jpg"

function Home(){
    return(
        <>
        <header>
            <nav>
                <button className="hamburger" id="hamburger">
                    =
                </button>
                <ul id="navMenu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Sabor de México</h1>
                    <h3>Authentic Mexican Cuisine</h3>
                    <p>
                        Our restaurant began as a family dream inspired
                        by traditional recipes passed down across many
                        generations. We ensure authentic Mexican flavors
                        in every dish using fresh ingredients and
                        homemade recipes.
                    </p>
                </div>
            </div>
        </header>

        <section className="featured">
            <h2>Featured Dishes</h2>
            <div className="dish-container">
                <div className="dish-card">
                    <img src={tacos} alt="Tacos"/>
                    <h3>Tacos al Pastor</h3>
                    <p>
                        Marinated pork tacos topped with pineapple,
                        onions, cilantro, and salsa of choice on the side.
                    </p>
                </div>
        
                <div className="dish-card">
                    <img src={enchiladas} alt="Enchiladas"/>
                    <h3>Enchiladas</h3>
                    <p>
                        Choice of cheese or meat wrapped in our
                        signature handmade corn tortillas, topped with
                        mole poblano and served with rice, and beans.
                    </p>
                </div>
        
                <div className="dish-card">
                    <img src={quesadillas} alt="Quesadillas"/>
                    <h3>Quesadillas</h3>
                    <p>
                        Cheese or meat of choice folded inside our signature
                        handmade tortilla topped with sour cream, cilantro, 
                        and queso fresco. 
                    </p>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;