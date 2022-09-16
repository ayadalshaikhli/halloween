import { useState, useEffect, useContext } from "react";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import axios from "axios";
import useSWR from "swr";
import payment from "../public/payments.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaStopwatch20,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import Hero from "./Hero";
var random = Math.floor(Math.random() * 20 + 10);
var round = Math.round(random);
// setup inventory fetcher
const fetchInventory = (url, id) =>
  axios
    .get(url, {
      params: {
        id: id,
      },
    })
    .then((res) => res.data);

export default function ProductForm({ product }) {
  const { data: productInventory } = useSWR(
    ["/api/available", product.handle],
    (url, id) => fetchInventory(url, id),
    { errorRetryCount: 3 }
  );
  // Images
  // Images
  // Images
  const images = [];
  product.variants.edges.map((mark, i) => {
    images.push(
      <div className="">
        <Image
          src={mark.node.image.originalSrc}
          alt={mark.node.image.altText}
          height={"50px"}
          width={"85px"}
        />
      </div>
    );
  });
  // Images
  // Images
  // Images
  const [available, setAvailable] = useState(true);

  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  useEffect(() => {
    if (productInventory) {
      const checkAvailable = productInventory?.variants.edges.filter(
        (item) => item.node.id === selectedVariant.id
      );

      if (checkAvailable[0].node.availableForSale) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
    }
  }, [productInventory, selectedVariant]);

  const price = product.variants.edges[0].node.priceV2.amount;
  // const image = product.variants.edges?.node.image.originalSrc;
  const compare = product.variants.edges[0].node.compareAtPriceV2.amount;
  const priceSaving = compare - price;
  const saving = ((compare - price) / compare) * 100;
  const roundv2 = Math.round(saving);

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
  const handleClick = () => {
    fbq.event("AddToCart", { currency: "USD", value: 90 });
  };
  console.log(product);
  return (
    <>
      <motion.div
        className=" items-center md:justify-between shadow-lg flex flex-col w-full  bg-black text-black z-10"
        initial="initial"
        animate="animate"
        style={{
          background: "#F4F6F6",
        }}
      >
        <div>
          {/* {product[0].map(({ options, variants, images }) => ( */}
          <div>
            {product.options.map(({ name, values }) => (
              <div>
                <fieldset className="mt-3 flex">
                  <legend className="text-xl font-semibold"></legend>
                  <div className="flex ">
                    <div className="relative grid grid-cols-1 gap-y-10 md:grid md:grid-cols-3 md:gap-x-20 z-20">
                      {values.map((value) => {
                        const id = `option-${name}-${value}`;
                        const checked = selectedOptions[name] === value;
                        return (
                          <label key={id} htmlFor={id}>
                            <input
                              className="sr-only "
                              type="radio"
                              id={id}
                              name={`option-${name}`}
                              value={value}
                              checked={checked}
                              onChange={() => {
                                setOptions(name, value);
                              }}
                            />
                            <div className="flex h-64 w-96 flex-col justify-between text-lg bg-white rounded-xl cursor-pointer  p-4">
                              <div className="flex items-center w-full z-10">
                                <div className="mr-2">{images[0]}</div>
                                <div>{value}</div>
                              </div>
                              <h1 className="">
                                <span>Instant</span> delivery to{" "}
                                <span>email</span>
                              </h1>
                              <h1></h1>
                              {available ? (
                                <button
                                  style={{
                                    zIndex: "50",
                                  }}
                                  onClick={() => {
                                    addToCart(selectedVariant), handleClick;
                                  }}
                                  className="flex bg-green-500 w-full justify-center mt-3 py-5 text-center rounded-lg z-50 text-black sm:px-2 sm:py-3 sm:mt-3 hover:bg-green-800"
                                >
                                  Add To Card
                                </button>
                              ) : (
                                <button className="rounded-lg text-white px-2 py-3 mt-3 bg-gray-800 cursor-not-allowed">
                                  Sold out!
                                </button>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>
              </div>
            ))}
          </div>
          {/* ))} */}
        </div>
      </motion.div>
    </>
  );
}
