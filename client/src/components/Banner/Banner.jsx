import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import "./Banner.scss";
import DataBanner from "./DataBanner";

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = DataBanner.length;

    const nextSlide = () => {
        const newSlide = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    };

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? slideLength - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };

    useEffect(() => {

        const slideInterval = setInterval(() => {
            const resetSlide = currentSlide === slideLength - 1 ? 0 : currentSlide + 1;
            setCurrentSlide(resetSlide);
        }, 7000)

        return () => clearInterval(slideInterval);

    }, [currentSlide]);

    return (
        <div className="container-banner">
            <BsChevronCompactLeft className="arrow prev" onClick={prevSlide} />
            <BsChevronCompactRight className="arrow next" onClick={nextSlide} />
            {DataBanner.map((slide, index) => {
                return (
                <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                    {index === currentSlide && (
                        <div className="slide-image">
                            <img src={slide.img_banner} alt={slide.alt} />
                        </div>
                    )}
                </div>
                );
            })}
        </div>
    );
};

export default Banner;
