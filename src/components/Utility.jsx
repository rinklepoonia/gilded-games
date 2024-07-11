import React from "react";
import UtilityBgImg from "../assets/images/webp/Utility-bg-img.webp";
import UtilityGirlImg from "../assets/images/webp/utility-girl-img.webp";

function Utility() {
  return (
    <div className="lg:bg-full bg-cover xl:pb-[194px] lg:pb-[23px] pb-[10px] mt-[-1px] bg-[url('./assets/images/webp/Utility-bg-img.webp')]">
      <div className="container">
        <div className="row items-center">
          <div data-aos="fade-right" className="xl:w-[41.66%] w-full px-3">
            <h2 className="font-Josefin font-bold text-[48px] leading-[61px] text-[#7E5FCA] xl:text-start text-center lg:mb-4 sm:mb-2 mb-0">
              NFT <span className="text-white">Utility</span>
            </h2>
            <p className="font-poppins font-normal text-[20px] leading-[35.9px] text-[#B2B3B4] xl:text-start text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              curabitur iaculis id cursus dignissim. Volutpat placerat volutpat
              commodo id ultricies volutpat vestibulum. Egestas venenatis
              dignissim fames maecenas. Blandit orci consectetur mauris, ipsum
              viverra quisque. Vulputate sollicitudin tellus eget consequat
              lectus dignissim integer in vitae. Commodo integer dis tortor cras
              maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat
              molestie nibh parturient lectus magna sed fusce diam urna. Quam
              magna duis imperdiet posuere iaculis.
            </p>
          </div>
          <div data-aos="fade-left" className="xl:w-[58.33%] w-full  px-3">
            <div className="flex justify-center align-center">
              <img
                className="w-full max-w-[369px] sm:h-[638px] h-[inherit] object-cover"
                src={UtilityGirlImg}
                alt="UtilityGirlImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utility;
