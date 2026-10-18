import { useTranslation } from "react-i18next";

const categories = [
  { id: "all", labelKey: "collection.filters.all" },
  { id: "bouquet", labelKey: "collection.filters.bouquets" },
  { id: "package", labelKey: "collection.filters.packages" },
];

function CollectionTabs({ activeCategory, onCategoryChange }) {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-wrap gap-3"
      role="group"
      aria-label={t("collection.filterLabel")}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2.5 text-sm transition-colors duration-200 ${
              isActive
                ? "border-flower-burgundy bg-flower-burgundy text-flower-champagne"
                : "border-flower-burgundy/20 text-flower-burgundy hover:border-flower-burgundy hover:bg-flower-burgundy/5"
            }`}
          >
            {t(category.labelKey)}
          </button>
        );
      })}
    </div>
  );
}

export default CollectionTabs;
