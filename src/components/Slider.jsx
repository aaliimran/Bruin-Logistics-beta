import React from "react";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

const slideImages = [
  {
    url: "https://static.wixstatic.com/media/247149_bbe73a900e314ea2a7428c7e04cc9853~mv2_d_2121_1414_s_2.jpg/v1/fill/w_1225,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/247149_bbe73a900e314ea2a7428c7e04cc9853~mv2_d_2121_1414_s_2.jpg",
    caption: "WELCOME TO",
    caption2: "BRUIN LOGISTICS LLC",
  },
  {
    url: "https://static.wixstatic.com/media/247149_61db84f355e74af694d9f525e530abae~mv2_d_4346_2290_s_2.jpg/v1/fill/w_1225,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/247149_61db84f355e74af694d9f525e530abae~mv2_d_4346_2290_s_2.jpg",
    caption: "WELCOME TO",
    caption2: "BRUIN LOGISTICS LLC",
  },
  {
    url: "https://static.wixstatic.com/media/247149_15790807a667450fb1a287e5d6289aef~mv2_d_2114_1418_s_2.jpg/v1/fill/w_1225,h_813,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/247149_15790807a667450fb1a287e5d6289aef~mv2_d_2114_1418_s_2.jpg",
    caption: "WELCOME TO",
    caption2: "BRUIN LOGISTICS LLC",
  },
];

const divStyle = {
  alignItems: "center",
  backgroundSize: "cover", // Изменено с 'contain' на 'cover'
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center", // Центрирует изображение
  display: "flex",
  justifyContent: "center",
  height: "650px",
};

const buttonStyle = {
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <img className="left-arrow" src={leftArrow} alt="" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <img className="right-arrow" src={rightArrow} alt="" />
    </button>
  ),
  duration: 4000,
  transitionDuration: 500,
  autoplay: true,
  infinite: true,
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url('${image.url})` }}>
              <div className="dark-overlay"></div>
              <div className="introduction-text">
                <span className="intro-text-1">{image.caption}</span>
                <span className="intro-text-2">{image.caption2}</span>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
