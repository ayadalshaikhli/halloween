// const navigation = [
//   { name: "About", href: "/contact" },
//   { name: "Shop", href: "#" },
//   { name: "Jobs", href: "#" },
//   { name: "Terms and Conditions", href: "#" },
// ];
import Link from "next/link";
import React, { useState } from "react";

import { FaPlus, FaAngleRight } from "react-icons/fa";
export default function Footer() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [showMe, setShowMe] = useState(false);
  const [showMe1, setShowMe1] = useState(false);
  const [showMe2, setShowMe2] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  function toggle1() {
    setShowMe1(!showMe1);
  }
  function toggle2() {
    setShowMe2(!showMe2);
  }
  return (
    <div className="md:flex relative text-white justify-around p-10 z-50 foot">
      <div>
        <button
          onClick={toggle}
          className="md:hidden flex justify-between w-full items-center border-b-2 border-gray-500 py-3"
        >
          My Acoount <FaPlus />
        </button>
        <div
          style={{
            display: showMe ? "block" : "none",
          }}
          className="md:hidden"
        >
          <h1 className="flex justify-between items-center">
            Sign in <FaAngleRight />
          </h1>
          <h1 className="flex justify-between items-center">
            Register <FaAngleRight />
          </h1>
        </div>
        <div className="hidden md:block">My Acoount</div>
        <div className="hidden md:block">
          <h1>Sign in</h1>
          <h1>Register</h1>
        </div>
      </div>
      <div>
        <button
          onClick={toggle1}
          className="md:hidden flex justify-between w-full items-center border-b-2 border-gray-500 py-3"
        >
          Service and help <FaPlus />
        </button>
        <div
          style={{
            display: showMe1 ? "block" : "none",
          }}
          className="md:hidden"
        >
          <h1 className="flex justify-between items-center">
            Need help?
            <FaAngleRight />
          </h1>
          <h1 className="flex justify-between items-center">
            About Us
            <FaAngleRight />
          </h1>
          <h1 className="flex justify-between items-center">
            Carriers
            <FaAngleRight />
          </h1>
          <h1 className="flex justify-between items-center">
            Countries
            <FaAngleRight />
          </h1>
        </div>
        <div className="hidden md:block">Service and help </div>
        <div className="hidden md:block">
          <h1>Need help?</h1>
          <h1>About Us</h1>
          <h1>Carriers</h1>
          <h1>Countries</h1>
        </div>
      </div>
      <div>
        <div>
          <button
            onClick={toggle2}
            className="md:hidden flex justify-between w-full items-center border-b-2 border-gray-500 py-3"
          >
            Products <FaPlus />
          </button>
          <div
            style={{
              display: showMe2 ? "block" : "none",
            }}
            className="md:hidden"
          >
            <h1 className="flex justify-between items-center">
              Mobile top-up
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center">
              Entertainment
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center">
              Shopping
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center">
              Gaming
              <FaAngleRight />
            </h1>
            <h1 className="flex justify-between items-center">
              Prepaid credit cards
              <FaAngleRight />
            </h1>
          </div>
          <div className="hidden md:block">Products</div>
          <div className="hidden md:block">
            <h1>Mobile top-up</h1>
            <h1>Entertainment</h1>
            <h1>Shopping</h1>
            <h1>Gaming</h1>
            <h1>Prepaid credit cards</h1>
          </div>
        </div>
      </div>
      <div className="text-center">Great</div>
    </div>
  );
}
