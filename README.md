# Ranosh Flowers 🌸

A bilingual floral website showcasing bouquets, wedding arrangements, and flowers for life's special moments.

**Live Website:** [ranosh-flowers.vercel.app](https://ranosh-flowers.vercel.app/)

Built with React and Tailwind CSS, featuring an elegant visual design, smooth animations, and Arabic-first support.

## ✨ Features

- **Arabic and English:** Switch languages with a saved language preference.
- **RTL and LTR support:** Layout direction adapts to the selected language.
- **Responsive design:** Optimized for desktop and mobile.
- **Featured collection:** Highlights selected bouquets and wedding packages.
- **Dynamic catalog:** Browse bouquets and wedding packages by category.
- **WhatsApp integration:** Contact the business directly about arrangements.
- **Reusable components:** Shared layout, navigation, and footer.
- **SEO metadata:** Page title, description, favicon, and social-sharing metadata.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (JSX)
- Tailwind CSS v4
- React Router
- i18next and react-i18next
- Motion for React
- Lucide React
- React Icons
- Fontsource


## 📁 Project Structure

```text
public/
└── images/

src/
├── components/
│   ├── layout/
│   ├── home/
│   └── Collection/
├── data/
│   ├── products.js
│   └── packages.js
├── i18n/
│   ├── index.js
│   └── locales/
│       ├── ar.json
│       └── en.json
├── pages/
│   ├── Home.jsx
│   └── Collection.jsx
├── App.jsx
├── main.jsx
└── index.css

index.html
package.json
```

## 🌐 Internationalization

The website uses i18next for Arabic and English translations.

- Arabic is the default language.
- Layout direction updates automatically between RTL and LTR.
- Language preference is saved in local storage.
- Visible text is managed through translation files.

## 🌷 Managing the Catalog

Products and wedding packages are managed through JavaScript data files.

To add an item:

1. Add its image to `public/images/`.
2. Add the item to `src/data/products.js` or `src/data/packages.js`.
3. Add its translation keys to both `ar.json` and `en.json`.
4. Set its featured status if it should appear in the homepage's featured collection.

## 🚀 Deployment

Deployed on [Vercel](https://vercel.com/).

- **Build command:** `npm run build`
- **Output directory:** `dist`

## 👨‍💻 Developer

**Gerges Nashaat**

- [Portfolio](https://gergesnashaat.vercel.app/)
- [GitHub](https://github.com/G3RGES)
- [LinkedIn](https://www.linkedin.com/in/gergesnashaat/)

---

Designed and developed with care. 🌹
