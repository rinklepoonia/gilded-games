import React from "react";
import EarnLeftEllip from "../assets/images/png/Earn-left-ellip.png";
import gif from "../assets/images/gif/earn-gif.gif";

function Earn() {
  return (
    <div className="bg-black relative xl:pb-[110px] pb-[50px]">
      <div className="container max-w-[1320px] mx-auto px-3">
        <h2 className="font-Josefin font-bold text-[48px] leading-[61px] text-white mb-4">
          Play To <span className="gradient-text">Earn</span>
        </h2>
        <p className="font-poppins font-normal text-[20px] leading-[32.9px] text-[#B2B2B2]">
          Gilded World will be the first game released by Gilded Games. It is an
          MMORPG, browser based game{" "}
          <span className="lg:block">
            that is unlike any other. We have taken inspiration from some of the
            most popular and successful
          </span>{" "}
          <span className="lg:block">
            MMORPG and RPG games and have boiled it down to the best online
            gameplay that people will
          </span>{" "}
          actually want to play!
        </p>
        <div className="border-5 border-gradient xl:mt-[48px] mt-[30px] rounded-[13px] relative z-[1]">
          <img
            className="w-full max-w-[1320px] 2xl:h-[561px]"
            src={gif}
            alt="EarnBoxImg"
          />
        </div>
      </div>
      <div className="absolute top-[30%] start-0 lg:block hidden">
        <img
          className="w-full max-w-[380px] h-[576px]"
          src={EarnLeftEllip}
          alt="EarnLeftEllip"
        />
      </div>
      <div className="absolute top-[30%] end-0 lg:block hidden">
        <img
          className="w-full max-w-[380px] h-[576px]"
          src={EarnLeftEllip}
          alt="EarnLeftEllip"
        />
      </div>
    </div>
  );
}

export default Earn;
