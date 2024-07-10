import React from "react";
import FooterLogo from "../assets/images/png/footer-logo.png";
import footerBgImg from "../assets/images/png/footer-bg-image.png";
import { DiscordSvg } from "./Icons";
import { TwitterSvg } from "./Icons";
import { Telegram } from "./Icons";
import { DotsSvg } from "./Icons";
import { ToySvg } from "./Icons";
import { GitHubSvg } from "./Icons";

function Footer() {
  return (
    <div
      className="bg-black mt-[1] lg:bg-full bg-cover"
      style={{ backgroundImage: `url(${footerBgImg})` }}
    >
      <div className="container max-w-[1320px] mx-auto px-3">
        <h2 className="font-poppins font-bold sm:text-[48px] text-[40px] leading-[72px] pb-[81px] text-white">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <div className="pt-[226.88px]">
          <img className="w-[286px] mb-3" src={FooterLogo} alt="FooterLogo" />
          <div className="row">
            <div className="lg:w-[41.33%] w-full px-3">
              <p className="font-poppins font-normal text-[16px] lh-[28.72px] text-[#B6B6B7] text-start mb-7">
                <span className="xl:block">
                  Lorem ipsum dolor sit amet, consectetur
                </span>{" "}
                <span className="xl:block">
                  adipiscing elit. Proin curabitur iaculis id
                </span>
                cursus dignissim.
              </p>
              <div className="flex gap-[6px] items-center">
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <DiscordSvg />
                </div>
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <TwitterSvg />
                </div>
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <Telegram />
                </div>
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <DotsSvg />
                </div>
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <ToySvg />
                </div>
                <div className="w-[31.2px] h-[31.2px] border bg-grident-footer-IconBox flex justify-center items-center">
                  <GitHubSvg />
                </div>
              </div>
            </div>
            <div className="lg:w-[58.33%] w-full px-3 lg:mt-0 mt-8">
              <div className="row lg:justify-end">
                <div className="lg:w-[25%] w-[50%] px-3 max-lg:flex">
                  <ul className="flex items-start flex-col">
                    <li className="font-Josefin font-semibold text-[16px] lh-[28.72px] text-white mb-3">
                      About:
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href="#"
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        Gilded Nodes
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-[25%] w-[50%] px-3">
                  <ul className="flex items-start flex-col">
                    <li className="font-Josefin font-semibold text-[16px] lh-[28.72px] text-white mb-3">
                      Gilded Token:
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        Etherscan.io
                      </a>
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition duration-300 ease-in-out"
                      >
                        Uniswap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[#A1A1A1] mt-[48.79px]"></div>
      <div className="flex items-center justify-center">
        <p className="font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]">
          © Copyright $GILD 2024
        </p>
        <div className="border-r border-[#999999] h-[35px] mr-[18px] ml-[18px]"></div>
        <p className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#999999]">
          Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
