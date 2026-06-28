import tacos from "../assets/tacos.jpg"
import enchiladas from "../assets/enchiladas.jpg"
import quesadillas from "../assets/quesadillas.jpg"

function FeaturedDishes(){
    return(
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
    )
}

export default FeaturedDishes;