import React, { useEffect, useState } from "react";
import HeroBGImg from "../assets/images/webp/hero-bg-img.webp";
import PageLogo from "../assets/images/webp/page-logo.webp";
import DiscordLogo from "../assets/images/webp/discord-logo.webp";
import presaleLogo from "../assets/images/webp/presale-logo.webp";

function HeroSection() {
  const [nav, setnav] = useState(false);

  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
   const initialTime = { days: 19, hours: 10, minutes: 2, seconds: 55 };

   const [timeLeft, setTimeLeft] = useState(initialTime);
   useEffect(() => {
     const countdown = setInterval(() => {
       if (
         timeLeft.days === 0 &&
         timeLeft.hours === 0 &&
         timeLeft.minutes === 0 &&
         timeLeft.seconds === 0
       ) {
         clearInterval(countdown);
       } else {
         if (timeLeft.seconds > 0) {
           setTimeLeft((prevTime) => ({
             ...prevTime,
             seconds: prevTime.seconds - 1,
           }));
         } else {
           if (timeLeft.minutes > 0) {
             setTimeLeft((prevTime) => ({
               ...prevTime,
               minutes: prevTime.minutes - 1,
               seconds: 59,
             }));
           } else {
             if (timeLeft.hours > 0) {
               setTimeLeft((prevTime) => ({
                 ...prevTime,
                 hours: prevTime.hours - 1,
                 minutes: 59,
                 seconds: 59,
               }));
             } else {
               setTimeLeft((prevTime) => ({
                 days: prevTime.days - 1,
                 hours: 23,
                 minutes: 59,
                 seconds: 59,
               }));
             }
           }
         }
       }
     }, 1000);

     return () => clearInterval(countdown);
   }, [timeLeft]);
  return (
    <>
      <div
        className="flex flex-col items-center xl:h-[931px] md:h-[700px] lg:bg-full bg-cover"
        style={{ backgroundImage: `url(${HeroBGImg})` }}
      >
        <div className="bg-[#0000001A] w-full">
          <div className="container max-w-[1320px] mx-auto px-3">
            <nav className="flex items-center justify-between h-[96px]">
              <a href="">
                {" "}
                <img
                  className="lg:max-w-[286px] max-w-[180px]"
                  src={PageLogo}
                  alt="PageLogo"
                />
              </a>
              <div className="flex items-center gap-[29px]">
                <ul
                  className={`${
                    nav ? "right_0" : "right_100"
                  } flex items-center lg:gap-[40px] gap-[20px] mb-0 ps-0 mobile-view`}
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
                <a href="https://discord.com/" target="_blank">
                  <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-[#FFFFFF] bg-gradient-tb shadow-shadow-btn sm:flex items-center gap-[10px] py-[14px] px-[34px] rounded-[79px]  hidden hover:bg-grident-rl transition duration-300 ease-linear">
                    <img
                      className="max-w-[22.94px]"
                      src={DiscordLogo}
                      alt="DiscordLogo"
                    />
                    Discord
                  </button>
                </a>
              </div>
              <div className="xl:hidden z-10" onClick={() => setnav(!nav)}>
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
            <div className="flex gap-[5px] justify-center mt-[20px]">
              <p className=" font-Josefin font-semibold text-[29px] lg:text-[36px] leading-[45.9px] text-[#1BABFE]">
                {timeLeft.days}d :
              </p>
              <p className=" font-Josefin font-semibold text-[29px] lg:text-[36px] leading-[45.9px] text-white">
                {timeLeft.hours}hr :
              </p>
              <p className=" font-Josefin font-semibold text-[29px] lg:text-[36px] leading-[45.9px] text-white">
                {timeLeft.minutes}min :
              </p>
              <p className=" font-Josefin font-semibold text-[29px] lg:text-[36px] leading-[45.9px] text-white">
                {timeLeft.seconds}sec
              </p>
            </div>
            <p className="font-Josefin text-[18px] lh-[22.95px] text-white">
              Remaining Presale Time
            </p>
            <div className="flex flex-wrap items-center gap-6 justify-center mt-[22px]">
              <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-white flex items-center gap-[10px] bg-grident-rl hover:bg-gradient-tb shadow-shadow-btn py-[14px] px-[34px] rounded-[79px] transition duration-300 ease-linear">
                <img
                  className="max-w-[22px]"
                  src={presaleLogo}
                  alt="presaleLogo"
                />
                Presale
              </button>
              <button className="font-Josefin fw-normal text-[24px] leading-[24px] text-white border border-white px-[34px] py-[14px] rounded-[79px] hover:bg-gradient-tb transition duration-300 ease-linear">
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
