import React from 'react'
import imageOne from "../assets/images/image-one.png"
import imageTwo from "../assets/images/image-two.png"
import imageThree from "../assets/images/image-three.png"
import imageFour from "../assets/images/image-four.png"
import imageFive from "../assets/images/image-five.png"
import imageSix from "../assets/images/image-six.png"
import imageSeven from "../assets/images/image-seven.png"
import imageEight from "../assets/images/image-eight.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <>
            <Carousel infiniteLoop autoPlay showThumbs= {false}>
                <div className="image">
                    <img src={imageOne} alt="" />
                </div>
                <div className="image">
                    <img src={imageTwo} alt="" />
                </div>
                <div className="image">
                    <img src={imageThree} alt="" />
                </div>
                <div className="image">
                    <img src={imageFour} alt="" />
                </div>
                <div className="image">
                    <img src={imageFive} alt="" />
                </div>
                <div className="image">
                    <img src={imageSix} alt="" />
                </div>
                <div className="image">
                    <img src={imageSeven} alt="" />
                </div>
                <div className="image">
                    <img src={imageEight} alt="" />
                </div>
            </Carousel>
        </>
    )
}

export default Slider