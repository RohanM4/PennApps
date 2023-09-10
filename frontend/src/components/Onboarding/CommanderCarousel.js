import React, {useState} from "react";
import Slider from "react-slick";
import {ReactComponent as CharacterOne} from '../../assets/characters/char1.svg';
import {ReactComponent as CharacterTwo} from '../../assets/characters/char2.svg';
import {ReactComponent as CharacterFour} from '../../assets/characters/char4.svg';
import {ReactComponent as CharacterFive} from '../../assets/characters/char5.svg';
import {ReactComponent as CharacterSix} from '../../assets/characters/char6.svg';
import {ReactComponent as CharacterSeven} from '../../assets/characters/char7.svg';
import {ReactComponent as CharacterEight} from '../../assets/characters/char8.svg';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const images = [ 
    {source: require('../../assets/characters/png/char4.png')}, 
    {source: require('../../assets/characters/png/char9.png')}, 
]
    const [imageClass, setImageClass] = useState('border border-8 border-yellow-400')
    const [selected, setSelected] = useState(0)
  return (
    <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index} className="mx-4">
                <img onClick={() => {
                    setImageClass('border border-8 border-yellow-400')
                    setSelected(index)
                }} src={image.source} className={index === selected ? imageClass : ''} width="400" height="400" />
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