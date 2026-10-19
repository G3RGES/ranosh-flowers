const products = [
  {
    "id": "burgundy-edit",
    "type": "bouquet",
    "nameKey": "products.burgundyEdit.name",
    "descriptionKey": "products.burgundyEdit.description",
    "image": "/images/bouquet-1.jpg",
    "featured": true,
    "collection": "romantic"
  },
  {
    "id": "soft-romance",
    "type": "bouquet",
    "nameKey": "products.softRomance.name",
    "descriptionKey": "products.softRomance.description",
    "image": "/images/bouquet-2.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "the-classic",
    "type": "bouquet",
    "nameKey": "products.theClassic.name",
    "descriptionKey": "products.theClassic.description",
    "image": "/images/bouquet-3.jpg",
    "featured": false,
    "collection": "classic"
  },
  {
    "id": "graduation-celebration",
    "type": "bouquet",
    "occasion": "graduation",
    "nameKey": "products.graduation.name",
    "descriptionKey": "products.graduation.description",
    "image": "/images/graduation-bouquet.jpg",
    "featured": true
  },
  {
    "id": "bridal-white-babys-breath",
    "type": "bouquet",
    "nameKey": "products.bridalWhiteBabyBreath.name",
    "descriptionKey": "products.bridalWhiteBabyBreath.description",
    "image": "/images/bridal-bouquet-white-roses-babys-breath.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "classic-white-bridal",
    "type": "bouquet",
    "nameKey": "products.classicWhiteBridal.name",
    "descriptionKey": "products.classicWhiteBridal.description",
    "image": "/images/bridal-bouquet-white-round-screenshot.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "ivory-rose-bridal",
    "type": "bouquet",
    "nameKey": "products.ivoryRoseBridal.name",
    "descriptionKey": "products.ivoryRoseBridal.description",
    "image": "/images/bridal-bouquet-ivory-roses.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "pink-rose-charm",
    "type": "bouquet",
    "nameKey": "products.pinkRoseCharm.name",
    "descriptionKey": "products.pinkRoseCharm.description",
    "image": "/images/bouquet-pink-roses-daisy.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "pink-lily-romance",
    "type": "bouquet",
    "nameKey": "products.pinkLilyRomance.name",
    "descriptionKey": "products.pinkLilyRomance.description",
    "image": "/images/bouquet-pink-lilies-roses.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "blush-lily-bouquet",
    "type": "bouquet",
    "nameKey": "products.blushLilyBouquet.name",
    "descriptionKey": "products.blushLilyBouquet.description",
    "image": "/images/bouquet-pink-lilies-mixed.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "red-rose-classic",
    "type": "bouquet",
    "nameKey": "products.redRoseClassic.name",
    "descriptionKey": "products.redRoseClassic.description",
    "image": "/images/bouquet-red-roses-babys-breath.jpg",
    "featured": false,
    "collection": "classic"
  },
  {
    "id": "scarlet-petal-arrangement",
    "type": "bouquet",
    "nameKey": "products.scarletPetalArrangement.name",
    "descriptionKey": "products.scarletPetalArrangement.description",
    "image": "/images/bouquet-red-rose-petals-arrangement.jpg",
    "featured": false,
    "collection": "classic"
  },
  {
    "id": "golden-butterfly-bouquet",
    "type": "bouquet",
    "nameKey": "products.goldenButterflyBouquet.name",
    "descriptionKey": "products.goldenButterflyBouquet.description",
    "image": "/images/bouquet-white-gold-butterflies.jpg",
    "featured": false,
    "collection": "celebration"
  },
  {
    "id": "blush-rose-elegance",
    "type": "bouquet",
    "nameKey": "products.blushRoseElegance.name",
    "descriptionKey": "products.blushRoseElegance.description",
    "image": "/images/bouquet-white-roses-pink-wrap.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "lilac-garden",
    "type": "bouquet",
    "nameKey": "products.lilacGarden.name",
    "descriptionKey": "products.lilacGarden.description",
    "image": "/images/bouquet-tulips-purple-daisy.jpg",
    "featured": false,
    "collection": "seasonal"
  },
  {
    "id": "bluebell-tulips",
    "type": "bouquet",
    "nameKey": "products.bluebellTulips.name",
    "descriptionKey": "products.bluebellTulips.description",
    "image": "/images/bouquet-blue-white-tulips.jpg",
    "featured": false,
    "collection": "seasonal"
  },
  {
    "id": "crimson-lily",
    "type": "bouquet",
    "nameKey": "products.crimsonLily.name",
    "descriptionKey": "products.crimsonLily.description",
    "image": "/images/bouquet-red-lilies.jpg",
    "featured": false,
    "collection": "classic"
  },
  {
    "id": "blue-butterfly-dream",
    "type": "bouquet",
    "nameKey": "products.blueButterflyDream.name",
    "descriptionKey": "products.blueButterflyDream.description",
    "image": "/images/bouquet-blue-butterflies.jpg",
    "featured": false,
    "collection": "celebration"
  },
  {
    "id": "ruby-mix",
    "type": "bouquet",
    "nameKey": "products.rubyMix.name",
    "descriptionKey": "products.rubyMix.description",
    "image": "/images/bouquet-red-purple-roses.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "pink-gerbera-blush",
    "type": "bouquet",
    "nameKey": "products.pinkGerberaBlush.name",
    "descriptionKey": "products.pinkGerberaBlush.description",
    "image": "/images/bouquet-pink-gerbera.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "velvet-red-blooms",
    "type": "bouquet",
    "nameKey": "products.velvetRedBlooms.name",
    "descriptionKey": "products.velvetRedBlooms.description",
    "image": "/images/bouquet-deep-red-anthurium.jpg",
    "featured": false,
    "collection": "classic"
  },
  {
    "id": "white-calla-bridal",
    "type": "bouquet",
    "nameKey": "products.whiteCallaBridal.name",
    "descriptionKey": "products.whiteCallaBridal.description",
    "image": "/images/bridal-bouquet-white-calla-lilies.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "white-rose-bridal",
    "type": "bouquet",
    "nameKey": "products.whiteRoseBridal.name",
    "descriptionKey": "products.whiteRoseBridal.description",
    "image": "/images/bridal-bouquet-white-roses-ribbon.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "ivory-rose-bridal-screenshot",
    "type": "bouquet",
    "nameKey": "products.ivoryRoseBridalScreenshot.name",
    "descriptionKey": "products.ivoryRoseBridalScreenshot.description",
    "image": "/images/bridal-bouquet-white-roses-screenshot.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "white-tulip-bridal",
    "type": "bouquet",
    "nameKey": "products.whiteTulipBridal.name",
    "descriptionKey": "products.whiteTulipBridal.description",
    "image": "/images/bridal-bouquet-white-tulips.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "pink-tulip-delight",
    "type": "bouquet",
    "nameKey": "products.pinkTulipDelight.name",
    "descriptionKey": "products.pinkTulipDelight.description",
    "image": "/images/bouquet-pink-tulips.jpg",
    "featured": false,
    "collection": "romantic"
  },
  {
    "id": "ivory-rose-hand-tied",
    "type": "bouquet",
    "nameKey": "products.ivoryRoseHandTied.name",
    "descriptionKey": "products.ivoryRoseHandTied.description",
    "image": "/images/bridal-bouquet-white-roses-green-stems.jpg",
    "featured": false,
    "collection": "classic",
    "occasion": "bridal"
  },
  {
    "id": "burgundy-butterfly-roses",
    "type": "bouquet",
    "nameKey": "products.burgundyButterflyRoses.name",
    "descriptionKey": "products.burgundyButterflyRoses.description",
    "image": "/images/bouquet-burgundy-roses-butterflies.jpg",
    "featured": true,
    "collection": "romantic"
  },
  {
    "id": "white-beaded-fan",
    "type": "accessory",
    "nameKey": "products.whiteBeadedFan.name",
    "descriptionKey": "products.whiteBeadedFan.description",
    "image": "/images/wedding-fan-white-beaded-01.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  },
  {
    "id": "lace-wedding-fan",
    "type": "accessory",
    "nameKey": "products.laceWeddingFan.name",
    "descriptionKey": "products.laceWeddingFan.description",
    "image": "/images/wedding-fan-white-lace-02.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  },
  {
    "id": "classic-lace-fan",
    "type": "accessory",
    "nameKey": "products.classicLaceFan.name",
    "descriptionKey": "products.classicLaceFan.description",
    "image": "/images/wedding-fan-white-lace-03.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  },
  {
    "id": "beaded-fan-detail",
    "type": "accessory",
    "nameKey": "products.beadedFanDetail.name",
    "descriptionKey": "products.beadedFanDetail.description",
    "image": "/images/wedding-fan-white-beaded-screenshot.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  },
  {
    "id": "lace-fan-detail",
    "type": "accessory",
    "nameKey": "products.laceFanDetail.name",
    "descriptionKey": "products.laceFanDetail.description",
    "image": "/images/wedding-fan-white-lace-screenshot.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  },
  {
    "id": "bridal-jewelry-detail",
    "type": "accessory",
    "nameKey": "products.bridalJewelryDetail.name",
    "descriptionKey": "products.bridalJewelryDetail.description",
    "image": "/images/wedding-accessory-earring-screenshot.jpg",
    "featured": false,
    "collection": "wedding-accessories",
    "occasion": "wedding"
  }
];

export default products;
