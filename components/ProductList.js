import ProductCard from "./ProductCard";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ProductList = ({ products }) => {
  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: ".product-list",
  //     start: "top 50%",
  //     end: "bottom 0%",

  //     onEnter: () => {
  //       gsap.to(".colormix", {
  //         duration: 1,
  //         color: "#000",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".colormix", {
  //         duration: 1,
  //         color: "#fff",
  //       });
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: ".product-list",
  //     start: "top 50%",
  //     end: "bottom 0%",

  //     onEnter: () => {
  //       gsap.to(".colornav", {
  //         duration: 1.0,
  //         color: "#000",
  //         backgroundColor: "#fff",
  //       });
  //     },

  //     onLeaveBack: () => {
  //       gsap.to(".colornav", {
  //         duration: 1.0,
  //         color: "#fff",
  //         backgroundColor: "#000",
  //       });
  //     },
  //   });
  // });

  return (
    <div style={{
      background: "#F4F6F6"
    }} id="body" className="relative product-list px-10 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h1 style={{
          color: "#00373D"
        }} className="text-2xl py-2 text-white font-extrabold ">
          Most Popular
        </h1>
        <div className="grid grid-cols-1  gap-y-50 gap-x-6 lg:even:grid-cols-4 lg:odd:grid-cols-4  xl:gap-4">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
