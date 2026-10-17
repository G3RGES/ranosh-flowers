import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const headlineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

function AnimatedHeadline({ text, reduceMotion, isArabic }) {
  if (reduceMotion) {
    return <>{text}</>;
  }

  // Arabic must remain one text node to preserve letter connections.
  if (isArabic) {
    return (
      <motion.span
        key="arabic-headline"
        className="inline-block"
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0%)" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
    );
  }

  // English: reveal each character in sequence.
  return (
    <motion.span
      key="english-headline"
      variants={headlineVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className="inline"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariants}
          aria-hidden="true"
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Hero() {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();

  const language = i18n.resolvedLanguage || i18n.language || "en";
  const isArabic = language.startsWith("ar");
  const title = t("hero.title");

  // Keep the rest of the text in sync with the headline.
  const headlineDuration = reduceMotion
    ? 0
    : isArabic
      ? 1.2
      : 0.35 + Math.max(0, title.length - 1) * 0.025;

  const descriptionDelay = headlineDuration + 0.15;
  const buttonsDelay = descriptionDelay + 0.4;

  function reveal(delay = 0) {
    if (reduceMotion) {
      return {};
    }

    return {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.4,
        delay,
        ease: "easeOut",
      },
    };
  }

  return (
    <section className="overflow-hidden bg-flower-champagne">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text content */}
        <div className={isArabic ? "text-right" : "text-left"}>
          <motion.p
            {...reveal(0)}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-flower-rose sm:text-sm"
          >
            {t("hero.eyebrow")}
          </motion.p>

          <h1 className="max-w-xl font-display text-5xl leading-[1.15] text-flower-burgundy sm:text-6xl lg:text-7xl">
            <AnimatedHeadline
              text={title}
              reduceMotion={reduceMotion}
              isArabic={isArabic}
            />
          </h1>

          <motion.p
            {...reveal(descriptionDelay)}
            className="mt-6 max-w-lg text-base leading-8 text-flower-ink/75 sm:text-lg"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            {...reveal(buttonsDelay)}
            className="mt-9 flex flex-wrap justify-start gap-4"
          >
            <Link
              to="/collection"
              className="inline-flex items-center justify-center rounded-full bg-flower-burgundy px-7 py-3.5 text-sm font-medium text-flower-champagne transition duration-300 hover:bg-flower-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flower-burgundy"
            >
              {t("hero.primaryCta")}
            </Link>

            <a
              href="#wedding-services"
              className="inline-flex items-center justify-center rounded-full border border-flower-burgundy/30 px-7 py-3.5 text-sm font-medium text-flower-burgundy transition duration-300 hover:border-flower-burgundy hover:bg-flower-burgundy/5"
            >
              {t("hero.secondaryCta")}
            </a>
          </motion.div>
        </div>

        {/* Bouquet image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-4 rounded-t-full border border-flower-gold/50" />

          <div className="relative aspect-4/5 overflow-hidden rounded-t-full bg-[#E9DCD0]">
            <img
              src="/images/hero-bouquet.jpg"
              alt={t("hero.imageAlt")}
              className="h-full w-full object-cover"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-full border border-flower-gold/60 bg-flower-champagne px-5 py-3 sm:-left-7">
            <p className="font-display text-lg italic text-flower-burgundy">
              {t("hero.imageCaption")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
