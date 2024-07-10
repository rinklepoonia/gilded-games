import React from "react";
import ParaGlidedBgImg from "../assets/images/webp/games-para-bg-img.webp";
import paraTopComa from "../assets/images/webp/para-top-coma.webp";
import paraBottomComa from "../assets/images/webp/para-bottom-coma.webp";

function ParaGilded() {
  return (
    <div
      className="bg-full  xl:h-[705px] h-[580px] flex justify-center items-center mt-[-1px]"
      style={{ backgroundImage: `url(${ParaGlidedBgImg})` }}
    >
      <div className="container max-w-[1320px] mx-auto px-3">
        <div className=" relative">
          <div className="absolute xl:top-[-58px] top-[-95px] xl:left-[9%] left-[0] sm:block hidden">
            <img className="w-[102px]" src={paraTopComa} alt="paraTopComa" />
          </div>
          <h3 className="font-Josefin font-normal lg:text-[40px] text-[30px] lg:leading-[62.4px] leading-[50px] text-white">
            Gilded Games is a new type of gaming platform,{" "}
            <span className="lg:block">
              partially owned and operated by its players. Earn
            </span>
            <span className="lg:block">
              Gild tokens by playing and use them to decide the{" "}
            </span>
            future of the game!
          </h3>
          <div className="absolute xl:right-[27%] lg:right-[22%] right-[5%] top-[80%] sm:block hidden">
            <img
              className="w-[102px]"
              src={paraBottomComa}
              alt="paraBottomComa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParaGilded;
