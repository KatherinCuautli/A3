import { useEffect, useState } from "react";

function Menu() {
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
            .then((res) => res.json())
            .then((data) => setMenu(data))
            .catch((err) => console.log(err));
    }, []);

    function addToCart(name, price) {
        const existingItem = cart.find((item) => item.name === name);
    
        if(existingItem) {
            setCart(
                cart.map((item) =>
                    item.name === name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    name,
                    price,
                    quantity: 1,
                },
            ]);
        }
    }

    function clearCart() {
    setCart([]);
    }

    async function placeOrder() {
        if(cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const order = {
            customerName: "Guest",
            items: cart.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price
            })),
            total: total
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, 
            {
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

    function removeFromCart(name) {
        const existingItem = cart.find((item) => item.name === name);
    
        if (!existingItem) return;
        if (existingItem.quantity === 1) {
            setCart(cart.filter((item) => item.name !== name));
        } else {
            setCart(
                cart.map((item) =>
                    item.name === name
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

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
                    <strong>{item.name}</strong> × {item.quantity}
                    <br />
                    ${(item.price * item.quantity).toFixed(2)}
                    <br />
                
                    <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.name)}>
                            Remove
                    </button>
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