import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { MessageCircle, Flower2, ArrowUpRight } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const WHATSAPP_NUMBER = "201280287326";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61595270377179",
};

function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isArabic = (i18n.resolvedLanguage || i18n.language || "en").startsWith(
    "ar",
  );

  return (
    <footer className="border-t border-flower-gold/30 bg-flower-burgundy text-flower-champagne">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-3xl tracking-wide transition-opacity hover:opacity-80"
            >
              <Flower2 size={21} strokeWidth={1.3} />
              Ranosh Flowers
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-flower-champagne/75">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-flower-gold">
              {t("footer.explore")}
            </h2>

            <nav className="flex flex-col items-start gap-3 text-sm text-flower-champagne/80">
              <Link to="/" className="transition-colors hover:text-white">
                {t("nav.home")}
              </Link>

              <Link
                to="/collection"
                className="transition-colors hover:text-white"
              >
                {t("nav.collection")}
              </Link>

              <Link
                to="/#our-story"
                className="transition-colors hover:text-white"
              >
                {t("nav.about")}
              </Link>
            </nav>
          </div>

          {/* Contact and social */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-flower-gold">
              {t("footer.contactTitle")}
            </h2>

            <p className="mb-5 max-w-xs text-sm leading-7 text-flower-champagne/75">
              {t("footer.contactDescription")}
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-flower-gold/50 px-5 py-2.5 text-sm transition-colors hover:bg-flower-champagne hover:text-flower-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flower-gold"
            >
              <MessageCircle size={17} />
              {t("footer.whatsapp")}
            </a>

            {/* Social links stay together */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-flower-gold/35 text-flower-champagne/85 transition-colors hover:border-flower-gold hover:bg-flower-champagne/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flower-gold"
                >
                  <FaFacebookF size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-flower-champagne/15 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-flower-champagne/60">
            © {currentYear} Ranosh Flowers. {t("footer.rights")}
          </p>

          <p className="font-display text-base italic text-flower-gold">
            {t("footer.signature")}
          </p>

          {/* Developer credit */}
          <a
            href="https://github.com/G3RGES"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-flower-champagne/20 px-3.5 py-2 text-xs text-flower-champagne/70 transition-all hover:border-flower-gold/60 hover:text-flower-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flower-gold sm:self-auto"
            aria-label="Designed and developed by Gerges Nashaat"
            dir={isArabic ? "rtl" : "ltr"}
          >
            <span className="text-flower-gold">✳</span>
            <span>
              {isArabic ? "تصميم وتطوير" : "Designed & developed by"}{" "}
              <span className="font-medium text-flower-champagne">Gerges</span>
            </span>
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
