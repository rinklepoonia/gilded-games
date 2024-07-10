import React from "react";
import glidBgImg from "../assets/images/png/glid-bg-img.png";
import billionImg from "../assets/images/png/billion-img.png";
import presale from "../assets/images/png/presale-logo.png";
import holdersImg from "../assets/images/png/holders-img.png";
import nftsoldImg from "../assets/images/png/nft-sold-img.png";
import Slider from "react-slick";

function Glid() {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplay: true,
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
    <div
      className="bg-full xl:pt-[130px] xl:pb-[136px] pt-[30px] pb-[30px]"
      style={{ backgroundImage: `url(${glidBgImg})` }}
    >
      <div className="container max-w-[1320px] mx-auto px-3">
        <h2 className="font-Josefin font-bold text-[48px] leading-[61.2px] text-white xl:pb-[59px] pb-[20px]">
          <span className="gradient-text ">$GILD</span> Token Info
        </h2>
        <div className="xl:flex gap-6 hidden">
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px] hover:shadow-shadow-btn border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[63px] mb-2"
                src={billionImg}
                alt="billionImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white">
                3 BIllion
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                GILD Token Info
              </p>
            </div>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center items-center flex flex-col 2xl:px-[50px] px-[25px] hover:shadow-shadow-btn border border-[#4A4A4A] hover:border-[#8E78D3]">
            <img className="w-[84px] mb-3" src={presale} alt="presale" />
            <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white xl:text-nowrap">
              Pre Sale Token
            </p>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px]hover:shadow-shadow-btn border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[70px] mb-3"
                src={holdersImg}
                alt="holdersImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                100,000+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                Holders
              </p>
            </div>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center flex 2xl:px-[50px] px-[25px] hover:shadow-shadow-btn border border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[70px] mb-[10px]"
                src={nftsoldImg}
                alt="nftsoldImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                2,500+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                NFT Sold
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings} className="d_none flex">
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center !flex 2xl:px-[50px] px-[25px] border hover:shadow-shadow-btn  border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[63px] mb-2"
                src={billionImg}
                alt="billionImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white">
                3 BIllion
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                GILD Token Info
              </p>
            </div>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center items-center !flex flex-col 2xl:px-[50px] px-[25px] border hover:shadow-shadow-btn border-[#4A4A4A] hover:border-[#8E78D3]">
            <img className="w-[84px] mb-3" src={presale} alt="presale" />
            <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white xl:text-nowrap">
              Pre Sale Token
            </p>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center !flex 2xl:px-[50px] px-[25px] border hover:shadow-shadow-btn  border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[70px] mb-3"
                src={holdersImg}
                alt="holdersImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                100,000+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                Holders
              </p>
            </div>
          </div>
          <div className="w-[312px] h-[181px] bg-gradient-token-box hover:bg-grident-rl rounded-[13px] transition ease-linear duration-300 cursor-pointer justify-center !flex 2xl:px-[50px] px-[25px] border hover:shadow-shadow-btn border-[#4A4A4A] hover:border-[#8E78D3]">
            <div className="w-[216px] items-center justify-center flex flex-col">
              <img
                className="w-[70px] mb-[10px]"
                src={nftsoldImg}
                alt="nftsoldImg"
              />
              <p className="font-Josefin font-bold text-[30px] leading-[38.25px] text-white mb-1">
                2,500+
              </p>
              <p className="font-Josefin font-normal text-[18px] leading-[22.95px] text-white">
                NFT Sold
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Glid;
