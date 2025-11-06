import "./../css/Slideshow.css";
import {useState} from "react";
const Slideshow = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const nextImage = (event) => {
        event.preventDefault();
        // if(slideIndex < images.length-1) {
        //     setslideIndex(slideIndex+1);
        // } else {
        //     setslideIndex(0);
        // }
        setslideIndex(slideIndex < images.length-1?slideIndex+1:0);
    }

    const previousImage = (event) => {
        event.preventDefault();
        // if(slideIndex >= 1) {
        //     setslideIndex(slideIndex-1)
        // } else {
        //     setslideIndex(0);
        // }
        setslideIndex(slideIndex >= 0?slideIndex-1:images.length-1);
    }
    

    return (
        <section id="slideshow">
            <img src={images[0]}/>
            <a className="arrow" onClick={nextImage} id="left-arrow" href="#">&gt;</a>
            <a className="arrow" onClick={previousImage} id="right-arrow" href="#">&lt;</a>
       </section>
    );
}

export default Slideshow;
    