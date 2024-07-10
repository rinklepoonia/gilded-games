import React from "react";
import EarnLeftEllip from "../assets/images/png/Earn-left-ellip.png";
import gif from "../assets/images/gif/earn-gif.gif";

function Earn() {
  return (
    <div className="bg-black relative xl:pb-[110px] pb-[50px]">
      <div className="container max-w-[1320px] mx-auto px-3">
        <h2 className="font-Josefin font-bold text-[48px] leading-[61px] text-white mb-4">
          Play To <span className="text-[#1BABFE]">Earn</span>
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

        <div className="linear-border md:mt-[48px] relative after:bg-grident-rl after:absolute after:border-[5px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[2]">
          <img className="w-[1320px] 2xl:h-[561px] z-[1] relative" src={gif} alt="gif" />
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
//  <div className="linear-border md:mt-[48px] relative after:bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] after:absolute after:border-[5px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[0]"><img src={Gifearn} alt="Gifearn" className='xl:h-[561px] w-[1320px]' /></div>
//                 </div>
