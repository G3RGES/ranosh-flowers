import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import packages from "../data/packages";

import CollectionTabs from "./../Components/Collection/CollectionTabs";
import ProductGrid from "./../Components/Collection/ProductGrid";

const allItems = [...products, ...packages];

// Replace this with the owner's WhatsApp number.
// Use international format without +, spaces, or dashes.
const WHATSAPP_NUMBER = "+201280287326";

function Collection() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const language = i18n.resolvedLanguage || i18n.language || "en";
  const isArabic = language.startsWith("ar");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return allItems;
    }

    return allItems.filter((item) => item.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-flower-champagne">
      {/* Page introduction */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pb-14 sm:pt-20">
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-flower-rose sm:text-sm">
            {t("collection.eyebrow")}
          </p>

          <h1 className="font-display text-4xl text-flower-burgundy sm:text-5xl lg:text-6xl">
            {t("collection.pageTitle")}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-flower-ink/75 sm:text-base">
            {t("collection.pageDescription")}
          </p>
        </div>
      </section>

      {/* Category filters and catalog */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mb-10">
          <CollectionTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <ProductGrid items={filteredItems} />
      </section>

      {/* WhatsApp invitation */}
      <section className="border-t border-flower-gold/30 bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div
          className={`mx-auto max-w-3xl text-center ${
            isArabic ? "font-body" : ""
          }`}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-flower-rose">
            {t("contact.eyebrow")}
          </p>

          <h2 className="font-display text-4xl text-flower-burgundy sm:text-5xl">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-flower-ink/75 sm:text-base">
            {t("contact.description")}
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-flower-burgundy px-7 py-3.5 text-sm font-medium text-flower-champagne transition-colors duration-300 hover:bg-flower-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flower-burgundy"
          >
            {t("contact.cta")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Collection;
