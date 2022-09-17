import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";
import { gsap, Expo } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  defaults: { ease: "power3.out" },
});
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  if (cartTotal >= 35) {
    var Good = "Congratulations! We pay shipping!";
  } else {
    var shippingaway = Math.round(35 - cartTotal);
    var free = "You're only" + " $" + shippingaway + " from free shipping";
  }

  // useEffect(() => {
  //   const showAnim = gsap
  //     .from(".nav-main", {
  //       yPercent: -200,
  //       paused: true,
  //       duration: 0.2,
  //     })
  //     .progress(1);

  //   ScrollTrigger.create({
  //     start: "top top",
  //     end: 99999,

  //     onUpdate: (self) => {
  //       self.direction === -1 ? showAnim.play() : showAnim.reverse();
  //     },
  //   });
  // });

  return (
    <header className="relative bg-transparent w-full colornav text-white  max-w-xl mx-auto pt-5   lg:max-w-7xl lg:px-8">
      <div className="nav-main justify-between  flex flex-col sm:flex-row   text-center items-center">
        <div className="logo">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h1 className="text-2xl    font-mono">
                <span className="late-text">Skelton</span>

                <span className="omo">King</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="nav-pages text-center sm:pl-96   md:pl-0  flex md:gap-x-2 ">
          <div>
            <Link href="/collections/body">
              <a className="cursor-pointer">
                <span className="text-lg  px-2  sm:px-4">Need help?</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/sunglasses-1">
              <a className="cursor-pointer ">
                <span className="text-lg  px-2  sm:px-4">EN | USD</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/collections/earrings">
              <a className="cursor-pointer ">
                <span className="text-lg  px-2  sm:px-4">Sign in</span>
              </a>
            </Link>
          </div>

          <div className="nav-cart">
            <a
              className="text-md font-bold cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <div className="relative">
                <BsBag size="1.5rem" />
                <div
                  style={{ fontSize: "10px", left: "10px" }}
                  className="absolute top-1 text-sm"
                >
                  {cartQuantity}
                </div>
              </div>
            </a>
          </div>
          <MiniCart cart={cart} />
        </div>
      </div>

    </header>
  );
}
