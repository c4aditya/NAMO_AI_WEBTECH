
import Slides from "./SliderData";
import Lottie from "lottie-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { BiRightTopArrowCircle } from "react-icons/bi";
function Poster() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    function decrement() {
        setAnimate(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? Slides.length - 1 : prevIndex - 1));
            setAnimate(true);
        }, 50);
    }

    function increment() {
        setAnimate(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === Slides.length - 1 ? 0 : prevIndex + 1));
            setAnimate(true);
        }, 50);
    }

    useEffect(() => {
        setAnimate(true); // Animation enable every time poster changes
        const changeImageTimer = setInterval(() => {
            increment();
        }, 500000000000);
        return () => clearInterval(changeImageTimer);
    }, [currentIndex]);

    return (
        <>

            <div className="posters">

                <div className="poster">
                    <div className="decrement" onClick={decrement}>
                        <h1>< MdKeyboardArrowLeft /></h1>
                    </div>
                    <div className="title-image">
                        <div className={`title ${animate ? "animate" : ""}`}>
                            <h1>{Slides[currentIndex].title}</h1>
                            <p>{Slides[currentIndex].description}</p>
                            <div className="button">
                                <button className="btn">Get In Touch
                                    <div className="movingarrow">
                                        <BiRightTopArrowCircle />
                                    </div>
                                </button>
                            </div>

                        </div>
                        <div className="animation">
                            <Lottie animationData={Slides[currentIndex].animation} loop={false} />
                        </div>
                    </div>
                    <div className="increment" onClick={increment}>
                        <h1><MdKeyboardArrowRight /></h1>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Poster;
