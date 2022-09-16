import Image from "next/image";

import { FaArrowRight, FaBatteryHalf } from "react-icons/fa";
import Link from "next/link";
import { gsap, Expo } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

export default function FrontPage() {
  


  return (
    <div
      style={{ height: "80vh", width: "100%" , zIndex: "-10"  }}
      className="text-white  md:flex md:flex-row md:justify-around overflow-hidden relative align-middle items-center "
    >
      <div className="z-10 top-0 flex flex-col text-left   mt-60 p-10 text-green-400">
        <h1 className="text-3xl md:text-6xl font-black  pb-10">
          Recharge <br />
          worldwide in <br />a few taps
        </h1>
        <p className="a text-gray-400 text-xl md:text-2xl pb-10">
        Worldwide mobile recharge: send credit <br/>and data to any phone
        </p>
        <button className=" bg-green-500 w-44 text-white text-md font-black px-5 rounded-md py-3">
          START NOW
        </button>
      </div>
      <div style={{
          background: "#F4F6F6"
      }}  className=" text-black w-96 h-96 rounded-t-xl p-10 mt-80 ">
        <h1 className="text-gray-400 text-xl md:text-2xl pb-10">
          what are you looking for?
        </h1>
        <ul className=" flex  flex-col gap-y-3">
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/> International mobile top-up
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/> Mobile top-up
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/> Entertainment
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/>Shopping
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/> Gaming
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
          <Link className=" cursor-pointer" href="/">
            <a>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaBatteryHalf  className="text-green-500"/> Prepaid credit card
                </div>
                <div>
                  <FaArrowRight />
                </div>
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}
