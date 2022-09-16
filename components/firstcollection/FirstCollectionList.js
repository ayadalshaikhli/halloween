import React, { Suspense, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FirstCollectionCard from "./FirstCollectionCard";

gsap.registerPlugin(ScrollTrigger);
const FirstCollectionList = ({ rings }) => {
  return (
    <div style={{
      background: "#F4F6F6"
    }} id="sunglasses" className="relative product-list px-5">
      <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold ">Mobile top-up</h1>
        <div className="grid grid-cols-2 gap-y-50 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {rings.map((ring) => (
            <FirstCollectionCard key={ring.node.id} ring={ring} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstCollectionList;
