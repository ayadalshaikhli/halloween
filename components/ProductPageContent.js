import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import React, { Suspense, useRef, useState, useEffect } from "react";
import RecommendedList from "./RecommendedList";
import ProductOptions from "./ProductOptions";
import ProductReviews from "./ProductReviews";
import Hero from "./Hero";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaCheck } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
export default function ProductPageContent({ product }) {
  const images = [];

  product.images.edges.map((image, i) => {
    images.push(
      <Image
        src={image.node.originalSrc}
        alt={image.node.altText}
        layout="fill"
        objectFit="fill"
      />
    );
  });

  SwiperCore.use([Mousewheel, Pagination]);

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

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <motion.div
        className="relative colornav z-10 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <div className="md:flex md:flex-col md:w-full  md:items-left  md:pt-10">
          <div className="w-64 h-44 relative md:flex hidden items-end ">
            <div>{images}</div>
            <div className=" ml-72 text-2xl">{product.title}</div>
          </div>

          <div className="flex flex-col md:flex md:flex-row md:w-full md:justify-between  md:gap-x-5 text-sm">
            <h1 className="flex items-center">
              <FaCheck className="text-green-400" />
              <span className="font-black px-2">Instant </span>
              <span>code delivery by email</span>
            </h1>
            <h1 className="flex items-center">
              <FaCheck className="text-green-400" />
              <span className="font-black px-2">Certified</span> reseller
            </h1>

            <h1 className="flex items-center ">
              <FaCheck className="text-green-400 " />
              <span className="font-black px-2">Safe</span> & secure payment
            </h1>
          </div>
        </div>

        <div className="mt-10">
          <ProductForm product={product} />
        </div>
        <div className="flex flex-col ">
          <h1 className="py-3 font-black">
            Buy a {product.title} Gift Card Online
          </h1>
          <div className="text-xl rounded-t-lg bg-white w-full px-5 py-5">
            <h1>About {product.title} USA</h1>
          </div>
          <div className="rounded-b-lg bg-white mt-1 w-full h-full tracking-widest px-5 py-5">
            {product.description}
          </div>
        </div>

        {/* <ProductReviews /> */}
        <RecommendedList
          current={product.id}
          products={product.collections.edges[0].node.products.edges}
        />
      </motion.div>
    </>
  );
}
