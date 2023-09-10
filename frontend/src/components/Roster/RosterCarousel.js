import React from "react";
import Slider from "react-slick";

export default function RosterCarousel() {
  var settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const images = [
    {source: require('../../assets/characters/png/char2.png')}, 
    {source: require('../../assets/characters/png/char3.png')}, 
    {source: require('../../assets/characters/png/char5.png')}, 
    {source: require('../../assets/characters/png/char4.png')}, 
    {source: require('../../assets/characters/png/char2.png')}, 
    {source: require('../../assets/characters/png/char3.png')}, 
    {source: require('../../assets/characters/png/char5.png')}, 
    {source: require('../../assets/characters/png/char4.png')}]
  return (
    <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
                <img src={image.source} width="200" height="200" />
            </div>
        ))}
        {/* <div className="container">
            <div className="px-4">
                <img src={require('../../assets/characters/png/char2.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
            <div className="px-4">
                <img src={require('../../assets/characters/png/char3.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
            <div className="px-4">
                <img src={require('../../assets/characters/png/char4.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
            <div className="px-4">
                <img src={require('../../assets/characters/png/char5.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
            <div className="px-4">
                <img src={require('../../assets/characters/png/char6.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
            <div className="px-4">
                <img src={require('../../assets/characters/png/char7.png')} className="w-60 h-60 py-4 px-2 mt-4"/>
            </div>
        </div> */}

    </Slider>
  );
}