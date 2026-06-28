import { useState } from "react";

import enchiladas from "../assets/enchiladas.jpg";
import tacos from "../assets/tacos.jpg";
import quesadillas from "../assets/quesadillas.jpg";
import tostadas from "../assets/tostadas.jpg";
import nachos from "../assets/nachos.jpg";
import torta from "../assets/torta.jpg";

function Gallery() {
    const images = [enchiladas, tacos, quesadillas, tostadas, nachos, torta];
    const [currentImage, setCurrentImage] = useState(0);
    
    function nextImage() {
        setCurrentImage((currentImage + 1) % images.length);
    }

    function prevImage() {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    }

    return(
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="slider-container">
                <button onClick={prevImage}>❮</button>
                <img 
                    id="sliderImage"
                    src={images[currentImage]}
                    alt="Gallery" />
                <button onClick={nextImage}>❯</button>
            </div>
        </section>
    );
}

export default Gallery;