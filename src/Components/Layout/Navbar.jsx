import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language || "en";

  const isArabic = currentLanguage.startsWith("ar");

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? "en" : "ar");
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.collection"), to: "/collection" },
  ];

  return (
    <header className="relative z-50 border-b border-flower-gold/30 bg-flower-champagne">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="font-display text-2xl font-semibold tracking-wide text-flower-burgundy sm:text-3xl"
        >
          Ranosh Flowers
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-flower-burgundy"
                    : "text-flower-ink/75 hover:text-flower-rose"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-sm font-medium text-flower-burgundy transition-colors hover:text-flower-rose"
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            {isArabic ? "EN" : "عربي"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 text-flower-burgundy transition hover:bg-flower-rose/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-flower-gold/30 bg-flower-champagne px-5 py-5 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-flower-burgundy"
                      : "text-flower-ink/75 hover:text-flower-rose"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
