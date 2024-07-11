import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import FooterLogo from "../assets/images/webp/footer-logo.webp";
import footerBgImg from "../assets/images/webp/footer-bg-image.webp";
import { DiscordSvg } from "./Icons";
import { TwitterSvg } from "./Icons";
import { Telegram } from "./Icons";
import { DotsSvg } from "./Icons";
import { ToySvg } from "./Icons";
import { GitHubSvg } from "./Icons";
import Accordion from "./Accordion";

function Footer() {
  return (
    <div
      className="bg-black mt-[1] lg:bg-full bg-cover xl:pt-[0] lg:pt-[55px] pt-[20px]"
      style={{ backgroundImage: `url(${footerBgImg})` }}
    >
      <div className="container">
        <h2 className="font-poppins font-bold sm:text-[48px] text-[40px] sm:leading-[72px] leading-[50px] xl:pb-[81px] lg:pb-[35px] pb-[20px] text-white">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <div className="max-w-[1038px] mx-auto">
          <Accordion />
        </div>
        <div
          id="about"
          className="xl:pt-[226.88px] lg:pt-[100px] sm:pt-[50px] pt-[25px]"
        >
          <a href="">
            {" "}
            <img className="w-[286px] mb-3" src={FooterLogo} alt="FooterLogo" />
          </a>
          <div className="row">
            <div className="lg:w-[41.33%] w-full px-3">
              <p className="font-poppins font-normal text-[16px] leading-[28.72px] text-lightgrey text-start mb-7">
                <span className="xl:block">
                  Lorem ipsum dolor sit amet, consectetur
                </span>{" "}
                <span className="xl:block">
                  adipiscing elit. Proin curabitur iaculis id
                </span>
                cursus dignissim.
              </p>
              <div className="flex gap-[6px] items-center">
                <a
                  href="https://discord.com/download"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey transition-all duration-300 ease-linear bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <DiscordSvg />
                </a>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <TwitterSvg />
                </a>
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <Telegram />
                </a>
                <a
                  href=""
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <DotsSvg />
                </a>
                <a
                  href=""
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <ToySvg />
                </a>
                <a
                  href="https://desktop.github.com/download/"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-BorderGrey bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <GitHubSvg />
                </a>
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
                        href="#about"
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href="#earn"
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <a
                        href="#nodes"
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
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
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                      >
                        Etherscan.io
                      </a>
                    </li>
                    <li className="mb-[6px]">
                      <a
                        href=""
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="#uniswap"
                        className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
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
      <div className="flex items-center justify-center my-2">
        <p className="font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]">
          © Copyright $GILD 2024
        </p>
        <div className="border-r border-[#999999] h-[35px] mr-[18px] ml-[18px]"></div>
        <p className="font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]">
          Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
