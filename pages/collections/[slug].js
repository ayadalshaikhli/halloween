import React from "react";
import { useRouter } from "next/router";
import CollectionPageContent from "../../components/collections/CollectionPageContent";
import { recursiveCatalog } from "../../lib/shopify";
import client from "../../lib/shopify";
const CollectionPage = ({ collection }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div>
        <CollectionPageContent collection={collection} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const collection = await client.collection.fetchByHandle(slug);

  return {
    props: {
      collection: JSON.parse(JSON.stringify(collection)),
    },
  };
}

// export async function getServerSideProps(context) {
//   const products = await client.product.fetchAll();
//   const collections = await client.collection.fetchAllWithProducts();
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//       collections: JSON.parse(JSON.stringify(collections)),
//     },
//   };
// }

export default CollectionPage;
