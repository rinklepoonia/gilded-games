import React from "react";
import EarnLeftEllip from "../assets/images/webp/Earn-left-ellip.webp";
import gif from "../assets/images/gif/earn-gif.gif";

function Earn() {
  return (
    <div id="earn" className="bg-black relative xl:pb-[110px] pb-[50px]">
      <div className="container sm:px-0 px-3">
        <h2
          data-aos="fade-up"
          className="font-Josefin font-bold lg:text-[48px] text-[40px] leading-[61px] text-white lg:mb-4 mb-0"
        >
          Play To <span className="text-skyblue">Earn</span>
        </h2>
        <p
          data-aos="fade-up"
          className="font-poppins font-normal min-lg:text-[20px] text-[16px] min-lg:leading-[32.9px] leading-[29px] text-lightGrey"
        >
          Gilded World will be the first game released by Gilded Games. It is an
          MMORPG, browser based game{" "}
          <span className="xl:block">
            that is unlike any other. We have taken inspiration from some of the
            most popular and successful
          </span>{" "}
          <span className="xl:block">
            MMORPG and RPG games and have boiled it down to the best online
            gameplay that people will
          </span>{" "}
          actually want to play!
        </p>
        <div className="border_Earn md:mt-[48px] mt-[20px] max-w-[1320px] max-xl:max-w-[500px] max-lg:max-w-[320px] mx-auto relative after:[background:linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)border-box] after:absolute after:border-[2px] lg:after:border-[5px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[2]">
          <img
            className="w-full max-xl:max-w-[500px] max-lg:max-w-[320px] 2xl:h-[561px] z-[1] relative"
            src={gif}
            alt="gif"
          />
        </div>
      </div>
      <div className="absolute top-[30%] start-0 xl:block hidden">
        <img
          className="w-full max-w-[380px] h-[576px]"
          src={EarnLeftEllip}
          alt="EarnLeftEllip"
        />
      </div>
      <div className="absolute top-[30%] end-0 xl:block hidden">
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
