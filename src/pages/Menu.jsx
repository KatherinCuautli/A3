import { useState } from "react";

import enchiladas from "../assets/enchiladas.jpg";
import tacos from "../assets/tacos.jpg";
import quesadillas from "../assets/quesadillas.jpg";
import tostadas from "../assets/tostadas.jpg";
import nachos from "../assets/nachos.jpg";
import torta from "../assets/torta.jpg";

function Menu() {
  const [cart, setCart] = useState([]);
  function addToCart(name, price) {
    setCart([...cart, { name, price }])
  }
  function clearCart() {
    setCart([]);
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return(
    <>
      <section className="menu-selection">
          <h1>Our Menu</h1>
          <div className="menu-container">
              <div className="menu-card">
                  <img src={enchiladas} alt="Enchiladas" />
                  <h3>Enchiladas</h3>
                  <p>$13.99</p>
                  <button onClick={() => addToCart("Enchiladas", 13.99)}>
                      Add To Cart
                  </button>
              </div>

              <div className="menu-card">
                  <img src={tacos} alt="Tacos" />
                  <h3>Tacos al Pastor</h3>
                  <p>$6.99</p>
                  <button onClick={() => addToCart("Tacos", 6.99)}>
                      Add To Cart
                  </button>
              </div>

              <div className="menu-card">
                  <img src={quesadillas} alt="Quesadillas" />
                  <h3>Quesadillas</h3>
                  <p>$8.99</p>
                  <button onClick={() => addToCart("Quesadillas", 8.99)}>
                      Add To Cart
                  </button>
              </div>

              <div className="menu-card">
                  <img src={tostadas} alt="Tostadas" />
                  <h3>Tostadas</h3>
                  <p>$10.99</p>
                  <button onClick={() => addToCart("Tostadas", 10.99)}>
                      Add To Cart
                  </button>
              </div>

              <div className="menu-card">
                  <img src={nachos} alt="Nachos" />
                  <h3>Nachos</h3>
                  <p>$7.99</p>
                  <button onClick={() => addToCart("Nachos", 7.99)}>
                      Add To Cart
                  </button>
              </div>

              <div className="menu-card">
                  <img src={torta} alt="Torta" />
                  <h3>Torta</h3>
                  <p>$15.99</p>
                  <button onClick={() => addToCart("Torta", 15.99)}>
                      Add To Cart
                  </button>
              </div>
          </div>
      </section>

      <section className="cart-section">
          <h2>Shopping Cart</h2>
          <ul id="cartItems">
            {cart.map((item, index) => (
                <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                </li>
            ))}
          </ul>
          <h3>
              Total: $
              <span id="totalPrice">
                {total.toFixed(2)}
              </span>
          </h3>
          <button onClick={clearCart}>
              Clear Cart
          </button>
      </section>
    </>
  )
}

export default Menu;