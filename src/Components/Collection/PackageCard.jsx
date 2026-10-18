import { useTranslation } from "react-i18next";

function PackageCard({ packageItem }) {
  const { t } = useTranslation();

  return (
    <article className="group min-w-0">
      <div className="aspect-[4/5] overflow-hidden bg-[#E9DCD0]">
        <img
          src={packageItem.image}
          alt={t(packageItem.nameKey)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="pt-5">
        <h2 className="font-display text-2xl text-flower-burgundy">
          {t(packageItem.nameKey)}
        </h2>

        <p className="mt-2 text-sm leading-7 text-flower-ink/70">
          {t(packageItem.descriptionKey)}
        </p>
      </div>
    </article>
  );
}

export default PackageCard;
