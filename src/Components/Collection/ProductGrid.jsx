import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";
import PackageCard from "./PackageCard";

function ProductGrid({ items }) {
  const { t } = useTranslation();

  if (items.length === 0) {
    return (
      <p className="py-16 text-center text-flower-ink/70">
        {t("collection.empty")}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        if (item.type === "package") {
          return <PackageCard key={item.id} packageItem={item} />;
        }

        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
}

export default ProductGrid;
