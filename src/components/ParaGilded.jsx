import React from "react";
import paraTopComa from "../assets/images/webp/para-top-coma.webp";
import paraBottomComa from "../assets/images/webp/para-bottom-coma.webp";

function ParaGilded() {
  return (
    <div className="bg-full  xl:h-[705px] h-[400px] flex justify-center items-center mt-[-1px] bg-[url('./assets/images/webp/games-para-bg-img.webp')]">
      <div className="container sm:px-0 px-3">
        <div data-aos="fade-up" className="relative">
          <div className="absolute xl:top-[-58px] top-[-95px] 2xl:left-[9%] left-[109px] 2xl:block hidden">
            <img className="w-[102px]" src={paraTopComa} alt="paraTopComa" />
          </div>
          <h3 className="font-Josefin font-normal lg:text-[40px] text-[30px] lg:leading-[62.4px] sm:leading-[50px] leading-[38px] text-white">
            Gilded Games is a new type of gaming platform,{" "}
            <span className="lg:block">
              partially owned and operated by its players. Earn
            </span>
            <span className="lg:block">
              Gild tokens by playing and use them to decide the{" "}
            </span>
            future of the game!
          </h3>
          <div className="absolute 2xl:right-[29%] lg:right-[28%] right-[5%] top-[80%] 2xl:block hidden">
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
