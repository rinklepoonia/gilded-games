import React, { useState } from "react";
import HeroBGImg from "../assets/images/png/hero-bg-img.png";
import PageLogo from "../assets/images/png/page-logo.png";
import DiscordLogo from "../assets/images/png/discord-logo.png";
import presaleLogo from "../assets/images/png/presale-logo.png";

function HeroSection() {
  const [nav, setnav] = useState(false);
  const toggleNav = () => {
    setnav(!nav);
  };

  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <div
        className="flex flex-col items-center xl:h-[931px] md:h-[700px] lg:bg-full bg-cover"
        style={{ backgroundImage: `url(${HeroBGImg})` }}
      >
        <div className="bg-[#0000001A] w-full">
          <div className="container max-w-[1320px] mx-auto px-3">
            <nav className="flex items-center justify-between h-[96px]">
              <img
                className="lg:max-w-[286px] max-w-[180px]"
                src={PageLogo}
                alt="PageLogo"
              />
              <div className="flex items-center gap-[29px]">
                <ul
                  className={`${
                    nav ? "end-0" : "right-[100%]"
                  } flex items-center lg:gap-[40px] gap-[20px] mb-0 ps-0 max-xl:bg-black max-xl:min-h-screen max-xl:w-full max-xl:fixed max-xl:top-0 max-xl:right-[-100%] max-xl:flex max-xl:justify-center max-xl:items-center max-xl:flex-col max-xl:z-10`}
                >
                  <li>
                    <a
                      href=""
                      className="font-Josefin font-normal text-[22px] leading-[22px] text-[#FFFFFF] text-nowrap hover:font-bold "
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-Josefin font-normal text-[22px] leading-[22px] text-[#FFFFFF] text-nowrap  hover:font-bold "
                    >
                      Presale $GILD
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-Josefin font-normal text-[22px] leading-[22px] text-[#FFFFFF] text-nowrap  hover:font-bold "
                    >
                      Staking $GILD
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-Josefin font-normal text-[22px] leading-[22px] text-[#FFFFFF] text-nowrap  hover:font-bold "
                    >
                      $GILD Nodes
                    </a>
                  </li>
                </ul>
                <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-[#FFFFFF] bg-gradient-tb shadow-shadow-btn sm:flex items-center gap-[10px] py-[14px] px-[34px] rounded-[79px]  hidden">
                  <img
                    className="max-w-[22.94px]"
                    src={DiscordLogo}
                    alt="DiscordLogo"
                  />
                  Discord
                </button>
              </div>
              {/* <div className="max-xl:block hidden" onClick={() => setnav(!nav)}> */}
              <div className={`max-xl:block hidden`} onClick={toggleNav}>
                <span className="max-xl:h-[4px] max-xl:w-[35px] max-xl:bg-gradient-tb max-xl:block"></span>
                <span className="max-xl:h-[4px] max-xl:w-[35px] max-xl:bg-gradient-tb max-xl:block max-xl:my-2"></span>
                <span className="max-xl:h-[4px] max-xl:w-[35px] max-xl:bg-gradient-tb max-xl:block"></span>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex grow md:items-center max-md:py-[50px]">
          <div className="container max-w-[1320px] mx-auto px-3">
            <h1 className="font-poppins font-normal lg:text-[72px] sm:text-[60px] text-[50px] lg:leading-[91.8px] sm:leading-[68px] leading-[58px] text-white max-w-[1320px]">
              There are games... And then{" "}
              <span className="xl:block">
                there are <span className="text-[#1BABFE]">Gilded</span> Games
              </span>
            </h1>
            <p className="font-Josefin font-semibold lg:text-[36px] text-[28px] leading-[45.9px] text-white md:mt-5 mt-2">
              <span className="text-[#1BABFE]">19d : </span> 10hr : 2min : 55sec
            </p>
            <p className="font-Josefin text-[18px] lh-[22.95px] text-white">
              Remaining Presale Time
            </p>
            <div className="flex flex-wrap items-center gap-6 justify-center mt-[22px]">
              <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-white flex items-center gap-[10px] bg-grident-rl shadow-shadow-btn py-[14px] px-[34px] rounded-[79px]">
                <img
                  className="max-w-[22px]"
                  src={presaleLogo}
                  alt="presaleLogo"
                />
                Presale
              </button>
              <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-white border border-white px-[34px] py-[14px] rounded-[79px]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
