import products from "./products";

// Keep homepage featured items in sync with the main product catalog.
const featuredBouquets = products.filter(
  (product) => product.type === "bouquet" && product.featured
);

export default featuredBouquets;
