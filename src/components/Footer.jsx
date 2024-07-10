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

function Footer(): JSX.Element {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div
      className="bg-black mt-[1] lg:bg-full bg-cover"
      style={{ backgroundImage: `url(${footerBgImg})` }}
    >
      <div className="container max-w-[1320px] mx-auto px-3">
        <h2 className="font-poppins font-bold sm:text-[48px] text-[40px] leading-[72px] pb-[81px] text-white">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <>
          <div id="accordionExample">
            <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <h2 className="mb-0" id="headingone">
                <button
                  className={`${
                    activeElement === "element1"
                      ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                      : `transition-none rounded-b-[15px]`
                  } group relative flex gap-[20px] w-full items-baseline  border-0 bg-white px-5 py-4 text-left   transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                  type="button"
                  onClick={() => handleClick("element1")}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="font-poppins font-normal text-[28px] leading-[21.94px]">
                    Q.1
                  </span>{" "}
                  <span className="font-mont font-normal text-[18px] leading-[27px] text-white">
                    Lectus tristique turpis id?
                  </span>
                  <span
                    className={`${
                      activeElement === "element1"
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === "element1"}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4 font-poppins font-normal text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  est malesuada massa nec pharetra.
                </div>
              </TECollapse>
            </div>
          </div>
          <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="headingTwo">
              <button
                className={`${
                  activeElement === "element2"
                    ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element2")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #2
                <span
                  className={`${
                    activeElement === "element2"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element2"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="px-5 py-4">
                <strong>This is the second item's accordion body.</strong> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                ligula in varius. Proin ac erat pretium, ultricies leo at,
                cursus ante. Pellentesque at odio euismod, mattis urna ac,
                accumsan metus. Nam nisi leo, malesuada vitae pretium et,
                laoreet at lorem. Curabitur non sollicitudin neque.
              </div>
            </TECollapse>
          </div>
          <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="accordion-header mb-0" id="headingThree">
              <button
                className={`${
                  activeElement === "element3"
                    ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element3")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #3
                <span
                  className={`${
                    activeElement === "element3"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element3"}
              className="!mt-0 !shadow-none"
            >
              <div className="px-5 py-4">
                <strong>This is the third item's accordion body.</strong>Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                ligula in varius. Proin ac erat pretium, ultricies leo at,
                cursus ante. Pellentesque at odio euismod, mattis urna ac,
                accumsan metus. Nam nisi leo, malesuada vitae pretium et,
                laoreet at lorem. Curabitur non sollicitudin neque.
              </div>
            </TECollapse>
          </div>
          <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="accordion-header mb-0" id="headingFour">
              <button
                className={`${
                  activeElement === "element4"
                    ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element4")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #4
                <span
                  className={`${
                    activeElement === "element4"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element4"}
              className="!mt-0 !shadow-none"
            >
              <div className="px-5 py-4">
                <strong>This is the 4 item's accordion body.</strong>Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                ligula in varius. Proin ac erat pretium, ultricies leo at,
                cursus ante. Pellentesque at odio euismod, mattis urna ac,
                accumsan metus. Nam nisi leo, malesuada vitae pretium et,
                laoreet at lorem. Curabitur non sollicitudin neque.
              </div>
            </TECollapse>
          </div>
          <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 overflow-hidden">
            <h2 className="accordion-header mb-0" id="headingFive">
              <button
                className={`${
                  activeElement === "element5"
                    ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                    : `transition-none rounded-b-[15px]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                type="button"
                onClick={() => handleClick("element5")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #5
                <span
                  className={`${
                    activeElement === "element5"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={activeElement === "element5"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="px-5 py-4">
                <strong>This is the 4 item's accordion body.</strong>Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                ligula in varius. Proin ac erat pretium, ultricies leo at,
                cursus ante. Pellentesque at odio euismod, mattis urna ac,
                accumsan metus. Nam nisi leo, malesuada vitae pretium et,
                laoreet at lorem. Curabitur non sollicitudin neque.
              </div>
            </TECollapse>
          </div>
        </>

        <div className="pt-[226.88px]">
          <a href="">
            {" "}
            <img className="w-[286px] mb-3" src={FooterLogo} alt="FooterLogo" />
          </a>
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
                <a
                  href="https://discord.com/download"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-[#272728] transition-all duration-300 ease-linear bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <DiscordSvg />
                </a>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-[#272728] bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <TwitterSvg />
                </a>
                <a
                  href="https://telegram.org/"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-[#272728] bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <Telegram />
                </a>
                <a
                  href=""
                  className="w-[31.2px] h-[31.2px] border border-[#272728] bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <DotsSvg />
                </a>
                <a
                  href=""
                  className="w-[31.2px] h-[31.2px] border border-[#272728] bg-grident-footer-IconBox flex justify-center items-center"
                >
                  <ToySvg />
                </a>
                <a
                  href="https://desktop.github.com/download/"
                  target="_blank"
                  className="w-[31.2px] h-[31.2px] border border-[#272728] bg-grident-footer-IconBox flex justify-center items-center"
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
