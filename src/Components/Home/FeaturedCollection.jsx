import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import products from "../../data/products";
import packages from "../../data/packages";

function FeaturedCollection() {
  const { t, i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage || "en").startsWith("ar");
  const featuredItems = [
    ...products.filter((item) => item.featured),
    ...packages.filter((item) => item.featured),
  ].slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`mb-12 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-flower-rose sm:text-sm">
              {t("collection.eyebrow")}
            </p>

            <h2 className="font-display text-4xl text-flower-burgundy sm:text-5xl lg:text-6xl">
              {t("collection.title")}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-flower-ink/70 sm:text-base">
              {t("collection.description")}
            </p>
          </div>

          <Link
            to="/collection"
            className="inline-flex w-fit items-center border-b border-flower-gold pb-2 text-sm font-semibold text-flower-burgundy transition-colors hover:border-flower-burgundy"
          >
            {t("collection.viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((bouquet) => (
            <article key={bouquet.id} className="group">
              <Link
                to="/collection"
                className="block overflow-hidden bg-flower-champagne"
                aria-label={t(bouquet.nameKey)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={bouquet.image}
                    alt={t(bouquet.nameKey)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className={`pt-5 ${isArabic ? "text-right" : "text-left"}`}>
                <h3 className="font-display text-2xl text-flower-burgundy">
                  {t(bouquet.nameKey)}
                </h3>

                <p className="mt-2 text-sm leading-6 text-flower-ink/70">
                  {t(bouquet.descriptionKey)}
                </p>

                <Link
                  to="/collection"
                  className="mt-4 inline-block text-sm font-semibold text-flower-burgundy transition-colors hover:text-flower-rose"
                >
                  {t("collection.discover")} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
