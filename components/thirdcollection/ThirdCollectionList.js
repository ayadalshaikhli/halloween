import React, { Suspense, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ThirdCollectionCard from "./ThirdCollectionCard";
gsap.registerPlugin(ScrollTrigger);
const ThirdCollectionList = ({ necklaces }) => {
  return (
    <div style={{
      background: "#F4F6F6"
    }} id="necklaces" className="relative product-list px-5">
      <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl py-10 font-extrabold ">Necklaces</h1>
        <div className="grid grid-cols-2 gap-y-50 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {necklaces.map((necklace) => (
            <ThirdCollectionCard key={necklace.node.id} necklace={necklace} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdCollectionList;
