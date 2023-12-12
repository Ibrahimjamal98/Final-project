import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Slide.css";

const Slide = ({ url, caption }) => (
  <div>
    <img
      style={{ maxWidth: "100%", height: "600px" }}
      src={url}
      alt={caption}
    />
    <h2>{caption}</h2>
  </div>
);

const SlickSlider = () => {
  const fadeImages = [
    {
      url: "https://e0.pxfuel.com/wallpapers/449/257/desktop-wallpaper-logitech-2560x1440-logitech.jpg",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/0B4BCFC8-3341-4DA5-97C6-3352C97B3B64/fwebp",
    },
    {
      url: "https://dlcdnwebimgs.asus.com/gain/241E8EC9-B400-49EE-A462-E41380E8E9EC/fwebp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {fadeImages.map((fadeImage, index) => (
        <Slide key={index} {...fadeImage} />
      ))}
    </Slider>
  );
};

export default SlickSlider;
