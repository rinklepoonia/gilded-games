import React from "react";
import unerealImg1 from "../assets/images/webp/powerd-img1.webp";
import uniswapImg2 from "../assets/images/webp/powerd-img2.webp";
import geckoImg3 from "../assets/images/webp/powered-img3.webp";
import polygonImg4 from "../assets/images/webp/powered-img4.webp";
import Slider from "react-slick";

function Powered() {
  var settings = {
    dots: false,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-black xl:pt-[58px] lg:pt-[80px] pt-[40px] xl:pb-[192px] pb-[50px] mt-[-1px]">
      <div className="container sm:px-0 px-3">
        <h2 className="font-Josefin font-bold sm:text-[48px] text-[40px] lh-[61.2px] text-white xl:pb-[68px] sm:pb-[20px] pb-[5px]">
          <span className="gradient-text">Powered</span> By:
        </h2>
        <div className="xl:flex hidden gap-[24px] justify-center">
          <a
            data-aos="fade-up"
            href="https://www.unrealengine.com/en-US"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border border-[#222222] hover:border-[#8E78D3] transition-all duration-300 ease-linear"
          >
            <img className="w-[274px]" src={unerealImg1} alt="unerealImg1" />
          </a>
          <a
            data-aos="fade-down"
            href="https://uniswap.org/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border border-[#222222] hover:border-[#8E78D3] transition-all duration-300 ease-linear"
          >
            <img className="w-[273px]" src={uniswapImg2} alt="uniswapImg2" />
          </a>
          <a
            data-aos="fade-up"
            href="https://www.coingecko.com/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border border-[#222222] hover:border-[#8E78D3] transition-all duration-300 ease-linear"
          >
            <img className="w-[247px]" src={geckoImg3} alt="geckoImg3" />
          </a>
          <a
            data-aos="fade-down"
            href="https://polygon.technology/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border border-[#222222] transition-all duration-300 ease-linear hover:border-[#8E78D3]"
          >
            <img className="w-[261px]" src={polygonImg4} alt="polygonImg4" />
          </a>
        </div>
        <Slider {...settings} className="d_none flex">
          <a
            href="https://www.unrealengine.com/en-US"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] !flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border hover:border-[#8E78D3]"
          >
            <img className="w-[274px]" src={unerealImg1} alt="unerealImg1" />
          </a>
          <a
            href="https://uniswap.org/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] !flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border hover:border-[#8E78D3]"
          >
            <img className="w-[273px]" src={uniswapImg2} alt="uniswapImg2" />
          </a>
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] !flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border hover:border-[#8E78D3]"
          >
            <img className="w-[247px]" src={geckoImg3} alt="geckoImg3" />
          </a>
          <a
            href="https://polygon.technology/"
            target="_blank"
            className="bg-gradient-token-box w-[312px] h-[214px] !flex justify-center items-center rounded-[24px] hover:bg-grident-rl hover:shadow-shadaw-box border hover:border-[#8E78D3]"
          >
            <img className="w-[261px]" src={polygonImg4} alt="polygonImg4" />
          </a>
        </Slider>
      </div>
    </div>
  );
}

export default Powered;
