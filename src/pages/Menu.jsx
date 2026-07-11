import { useEffect, useState } from "react";

import enchiladas from "../assets/enchiladas.jpg";
import tacos from "../assets/tacos.jpg";
import quesadillas from "../assets/quesadillas.jpg";
import tostadas from "../assets/tostadas.jpg";
import nachos from "../assets/nachos.jpg";
import torta from "../assets/torta.jpg";

function Menu() {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/menu")
        .then((res) => res.json())
        .then((data) => setMenu(data))
        .catch((err) => console.log(err));
    }, []);

  function addToCart(name, price) {
    setCart([...cart, { name, price }])
  }

  function clearCart() {
    setCart([]);
  }

  async function placeOrder() {
    if(cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const order = {
        customerName: "Guest",
        items: cart.map(item => ({
            name: item.name,
            quantity: 1,
            price: item.price
        })),
        total: total
    };

    try {
        const response = await fetch("http://localhost:5050/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

        if (response.ok) {
            alert("Order placed successfully!");
            setCart([]);
        } else {
            alert("Failed to place order.");
        }
    } catch (error) {
        console.error(error);
        alert("Server error.");
    }
}

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return(
    <>
      <section className="menu-selection">
        <h1>Our Menu</h1>
        <div className="menu-container">
        {menu.map((item) => (
            <div className="menu-card" key={item._id}>
                <img
                    src={new URL(`../assets/${item.image}`, import.meta.url).href}
                    alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>${item.price.toFixed(2)}</p>

                <button
                    onClick={() => addToCart(item.name, item.price)}>
                    Add To Cart
                </button>
            </div>
        ))}
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
          <button onClick={placeOrder}>
            Place Order
          </button>
      </section>
    </>
  )
}

export default Menu;