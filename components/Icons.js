import React from "react";
import { FaRegThumbsUp, FaLock, FaRegClock } from "react-icons/fa";

export default function Icons() {
  return (
    <div
      style={{
        background: "white",
      }}
      className="bg-white gap-y-10 relative flex flex-col md:flex md:flex-col md:items-center p-10 md:justify-center z-10 text-center "
    >
      <div className="">
        <h1 className="text-2xl font-black">Fast, Safe & Simple Recharge</h1>
      </div>
      <div className="flex flex-col md:flex md:flex-row  justify-around ">
        <div className="text-md flex flex-col items-center gap-y-2">
          <FaRegClock fontSize={50} className="text-green-400" />
          <div className="flex flex-col">
            <h1>Direct digital delivery</h1>
            <p className="w-96">
              Direct digital delivery In a matter of seconds you will receive
              your digital credit.
            </p>
          </div>
        </div>
        <div className=" text-md flex flex-col items-center gap-y-2">
          <FaRegThumbsUp fontSize={50} className="text-green-400" />
          <div className="flex flex-col">
            <h1>Milions of satisfied customers</h1>
            <p className="w-96">
              We are proud to serve more than 5 happy million customers
              worldwide.
            </p>
          </div>
        </div>
        <div className=" text-md flex flex-col items-center gap-y-2">
          <FaLock fontSize={50} className="text-green-400" />
          <div className="flex flex-col">
            <h1>Pay securely</h1>
            <p className="w-96">
              Pay in seconds with your favourite payment method.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-400 w-80 h-10 rounded-xl p-1">About Us</div>
    </div>
  );
}
