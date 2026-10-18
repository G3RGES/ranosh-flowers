import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();

  const language = i18n.resolvedLanguage || i18n.language || "en";
  const isArabic = language.startsWith("ar");

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="our-story"
      className="overflow-hidden bg-flower-champagne py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Editorial image */}
        <motion.div
          {...reveal}
          className="relative mx-auto w-full max-w-2xl lg:mx-0"
        >
          <div className="absolute -right-3 -top-3 h-full w-full border border-flower-gold/60 sm:-right-5 sm:-top-5" />

          <div className="relative aspect-[5/4] overflow-hidden bg-[#E9DCD0]">
            <img
              src="/images/about.png"
              alt={t("about.imageAlt")}
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-flower-ink/20 to-transparent" />
          </div>

          <div
            className={`absolute -bottom-5 ${
              isArabic ? "-left-2 sm:-left-5" : "-right-2 sm:-right-5"
            } border border-flower-gold/50 bg-flower-champagne px-5 py-4 sm:px-7`}
          >
            <p className="font-display text-xl italic text-flower-burgundy sm:text-2xl">
              {t("about.imageCaption")}
            </p>
          </div>
        </motion.div>

        {/* Brand story */}
        <motion.div
          {...reveal}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease: "easeOut",
          }}
          className={`pt-5 lg:pt-0 ${isArabic ? "text-right" : "text-left"}`}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-flower-rose" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-flower-rose sm:text-sm">
              {t("about.eyebrow")}
            </p>
          </div>

          <h2 className="max-w-xl font-display text-4xl leading-tight text-flower-burgundy sm:text-5xl lg:text-6xl">
            {t("about.title")}
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-flower-ink/75 sm:text-base sm:leading-9">
            {t("about.description")}
          </p>

          <div className="mt-7 flex items-center gap-4">
            <span className="text-2xl text-flower-gold" aria-hidden="true">
              ✳
            </span>
            <p className="font-display text-xl italic text-flower-burgundy sm:text-2xl">
              {t("about.signature")}
            </p>
          </div>

          <div className="mt-9 h-px w-24 bg-flower-gold/70" />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
