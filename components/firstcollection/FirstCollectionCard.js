import Link from "next/link";
import Image from "next/image";
import { formatter } from "/utils/helpers";
import React, { useEffect, useState } from "react";
const FirstCollectionCard = ({ ring }) => {
  const { handle, title } = ring.node;

  const { altText, originalSrc } = ring.node.images.edges[0].node;

  const price = ring.node.priceRange.minVariantPrice.amount;
  const compare = ring.node.compareAtPriceRange.minVariantPrice.amount;

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link href={`/products/${handle}`}>
      <a className="group flex flex-col bg-white rounded-md border-2 p-2 pb-8 items-center justify-center">
        <div
          className="flex-col items-left rounded-lg  items-center justify-center p-5"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className=" w-32 h-20 relative md:w-32 md:h-30 ">
            {isHovering ? (
              <Image
                src={ring.node.images.edges[1].node.originalSrc}
                alt={ring.node.images.edges[1].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <Image
                src={ring.node.images.edges[0].node.originalSrc}
                alt={ring.node.images.edges[0].node.originalSrc.altText}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
        <div className="bg-white rounded-b-2xl  pl-2  flex flex-col justify-center">
          <h3 className="mt-4 text-md font-medium text-gray-900">
            {title}
          </h3>

        </div>
      </a>
    </Link>
  );
};

export default FirstCollectionCard;
