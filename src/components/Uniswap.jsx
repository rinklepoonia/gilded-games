import React from "react";
import UniBgImg from "../assets/images/webp/uniswap-bg-img.webp";
import UniGoldBgLayer from "../assets/images/webp/uni-gold-bgLayer.webp";
import goldBox from "../assets/images/webp/gold-box.webp";
import HorseImg from "../assets/images/webp/horse-img.webp";
function Uniswap() {
  return (
    <div
      id="uniswap"
      className="UniBgImg lg:bg-full bg-cover relative xl:pt-[213px] xl:pb-[200px] lg:pt-[50px] pt-[20px] pb-[50px] bg-[url('./assets/images/webp/uniswap-bg-img.webp')]"
    >
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-right"
            className="lg:w-[50%] w-full px-3 flex xl:justify-start justify-center lg:items-end"
          >
            <div className="blank">
              <h2 className="font-Josefin font-bold sm:text-[48px] text-[40px] leading-[61.2px] text-white lg:mb-[21px] mb-[5px] text-start">
                Buy On <span className="gradient-text">Uniswap</span>
              </h2>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                <p className="font-Josefin font-normal text-[20px] leading-[25.5px] text-white">
                  100,000+ Airdrop
                </p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                <p className="font-Josefin font-normal text-[20px] leading-[25.5px] text-white">
                  NFT $GILD giveaway
                </p>
              </div>
              <div className="flex items-center gap-3 lg:mb-[41px] mb-[20px]">
                <div className="w-[10px] h-[10px] rounded-[50%] bg-white"></div>
                <p className="font-Josefin font-normal text-[20px] leading-[25.5px] text-white">
                  Announcement and Games
                </p>
              </div>
              <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-[#FFFFFF] bg-grident-rl shadow-shadow-btn flex items-center gap-[10px] py-[14px] px-[34px] rounded-[79px] hover:bg-gradient-tb transition-all ease-linear duration-300">
                <img className="w-[23.2px]" src={HorseImg} alt="HorseImg " />
                Buy Now
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="lg:w-[50%] w-full px-3 flex 2xl:justify-center xl:justify-start justify-center"
          >
            <img
              className="w-[341px] sm:mt-[33px] mt-[50px]"
              src={goldBox}
              alt="goldBox"
            />
          </div>
        </div>
      </div>
      <div className="absolute lg:end-0 lg:top-[213px] md:top-[447px] xl:block hidden">
        <img className="w-[961px]" src={UniGoldBgLayer} alt="UniGoldBgLayer" />
      </div>
    </div>
  );
}

export default Uniswap;
