


let farmerIdCounter = 1000001;

export const farmerData = [
  {
    name: 'Jane R. Mendonez',
    province: 'Albay',
    municipality: 'Camalig',
    products: [
      {
        name: 'Corn',
        variety: 'Lagkitan',
        maxQuantityKg: 250,
        growTimeDays: 90,
        pricePerKg: 25,
        description: 'Glutinous white corn often grown in upland areas of Albay.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/9698Cuisine_foods_in_Bulacan_55.jpg'
      },{
        name: 'Rice',
        variety: 'IR64',
        maxQuantityKg: 300,
        growTimeDays: 120,
        pricePerKg: 40,
        description: 'High-yielding rice variety popular in Albay with soft grains and good aroma.',
        imageUrl: 'https://www.bigas-online.com/cdn/shop/products/well-milledrice_1024x1024@2x.jpg?v=1600423751'
      },
      {
        name: 'Coconut',
        variety: 'Dwarf',
        maxQuantityKg: 200,
        growTimeDays: 365,
        pricePerKg: 15,
        description: 'Common coconut variety in Bicol, used for copra and oil.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Abaca',
        variety: 'Inosa',
        maxQuantityKg: 100,
        growTimeDays: 240,
        pricePerKg: 75,
        description: 'Fiber crop used in handicrafts and ropes, native to the region.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Banana',
        variety: 'Lakatan',
        maxQuantityKg: 150,
        growTimeDays: 180,
        pricePerKg: 35,
        description: 'Sweet banana variety highly marketable in local towns.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Cassava',
        variety: 'Lakan 1',
        maxQuantityKg: 120,
        growTimeDays: 150,
        pricePerKg: 20,
        description: 'Starchy root crop grown in sandy loam soils of Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Sweet Potato',
        variety: 'VSP 6',
        maxQuantityKg: 140,
        growTimeDays: 100,
        pricePerKg: 22,
        description: 'Popular root crop used in snacks and delicacies.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Taro',
        variety: 'Gabi',
        maxQuantityKg: 90,
        growTimeDays: 130,
        pricePerKg: 28,
        description: 'Used in local Bicol Express and other dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Pili Nut',
        variety: 'Katutubo',
        maxQuantityKg: 60,
        growTimeDays: 365,
        pricePerKg: 200,
        description: 'Premium nut known for buttery flavor, native to Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Peanut',
        variety: 'NSIC Pn11',
        maxQuantityKg: 80,
        growTimeDays: 100,
        pricePerKg: 30,
        description: 'Legume crop important in Albay’s crop rotation system.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Tomato',
        variety: 'Diamante Max',
        maxQuantityKg: 100,
        growTimeDays: 75,
        pricePerKg: 38,
        description: 'Commonly grown in home gardens and farms in Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Eggplant',
        variety: 'Mistisa',
        maxQuantityKg: 90,
        growTimeDays: 85,
        pricePerKg: 26,
        description: 'Vegetable staple for pinakbet and grilled dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      }
    ]
  },
   {
    name: "Maria T. Salcedo",
    province: "Sorsogon",
    municipality: "Gubat",
    products: [
      {
        name: "Rice",
        variety: "PSB Rc82",
        maxQuantityKg: 280,
        growTimeDays: 110,
        pricePerKg: 38,
        description: "Widely grown variety in Sorsogon, known for resilience to pests.",
        imageUrl: "https://www.bigas-online.com/cdn/shop/products/well-milledrice_1024x1024@2x.jpg"
      },
      {
        name: "Taro",
        variety: "Gabi",
        maxQuantityKg: 100,
        growTimeDays: 130,
        pricePerKg: 30,
        description: "Common ingredient in laing and other native dishes.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Carlos M. Rivera",
    province: "Masbate",
    municipality: "Milagros",
    products: [
      {
        name: "Coconut",
        variety: "Tall",
        maxQuantityKg: 220,
        growTimeDays: 365,
        pricePerKg: 14,
        description: "Traditional coconut variety used in cooking oil production.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Peanut",
        variety: "NSIC Pn11",
        maxQuantityKg: 90,
        growTimeDays: 100,
        pricePerKg: 28,
        description: "Well-adapted legume in Masbate’s dry uplands.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Elena C. Mabunga",
    province: "Catanduanes",
    municipality: "Virac",
    products: [
      {
        name: "Abaca",
        variety: "Laylay",
        maxQuantityKg: 130,
        growTimeDays: 270,
        pricePerKg: 80,
        description: "Highly fibrous variety from Catanduanes for export.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Sweet Potato",
        variety: "VSP 30",
        maxQuantityKg: 120,
        growTimeDays: 90,
        pricePerKg: 20,
        description: "Fast-growing root crop popular in island towns.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Jose L. Bañares",
    province: "Camarines Norte",
    municipality: "Daet",
    products: [
      {
        name: "Banana",
        variety: "Saba",
        maxQuantityKg: 200,
        growTimeDays: 190,
        pricePerKg: 30,
        description: "Multipurpose variety used in cooking and snacks.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Cassava",
        variety: "Lakan 2",
        maxQuantityKg: 100,
        growTimeDays: 140,
        pricePerKg: 18,
        description: "Staple crop in Camarines Norte’s rural households.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Grace H. Tolentino",
    province: "Albay",
    municipality: "Tiwi",
    products: [
      {
        name: "Tomato",
        variety: "Red Globe",
        maxQuantityKg: 80,
        growTimeDays: 70,
        pricePerKg: 36,
        description: "Round variety grown near geothermal areas in Tiwi.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Eggplant",
        variety: "DLP Purple",
        maxQuantityKg: 85,
        growTimeDays: 90,
        pricePerKg: 24,
        description: "Used in grilled dishes and pickles, thrives in volcanic soil.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Rodrigo P. Belmonte",
    province: "Sorsogon",
    municipality: "Matnog",
    products: [
      {
        name: "Pili Nut",
        variety: "Katutubo",
        maxQuantityKg: 50,
        growTimeDays: 400,
        pricePerKg: 210,
        description: "Native nut prized in specialty markets and confections.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Corn",
        variety: "IPB Var6",
        maxQuantityKg: 260,
        growTimeDays: 95,
        pricePerKg: 27,
        description: "Yellow hybrid corn used for livestock feed.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/9698Cuisine_foods_in_Bulacan_55.jpg"
      }
    ]
  },
  {
    name: "Lorna A. Dimaculangan",
    province: "Masbate",
    municipality: "Mandaon",
    products: [
      {
        name: "Coconut",
        variety: "Dwarf",
        maxQuantityKg: 180,
        growTimeDays: 350,
        pricePerKg: 16,
        description: "Common variety used in producing desiccated coconut.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Peanut",
        variety: "ULTRA",
        maxQuantityKg: 85,
        growTimeDays: 105,
        pricePerKg: 32,
        description: "Large-seed peanut for roasting and market sale.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Antonio D. Villanueva",
    province: "Camarines Sur",
    municipality: "Libmanan",
    products: [
      {
        name: "Rice",
        variety: "Rc160",
        maxQuantityKg: 320,
        growTimeDays: 115,
        pricePerKg: 42,
        description: "Popular in wetland paddies in Camarines Sur.",
        imageUrl: "https://www.bigas-online.com/cdn/shop/products/well-milledrice_1024x1024@2x.jpg"
      },
      {
        name: "Tomato",
        variety: "Apollo",
        maxQuantityKg: 110,
        growTimeDays: 80,
        pricePerKg: 40,
        description: "Bright red tomato used in sauces and paste.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Feliza Q. Requinto",
    province: "Catanduanes",
    municipality: "San Andres",
    products: [
      {
        name: "Banana",
        variety: "Latundan",
        maxQuantityKg: 140,
        growTimeDays: 170,
        pricePerKg: 32,
        description: "Sweet banana variety ideal for desserts.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Sweet Potato",
        variety: "NSIC VSP6",
        maxQuantityKg: 150,
        growTimeDays: 90,
        pricePerKg: 23,
        description: "Purple-fleshed variant with high antioxidant content.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  {
    name: "Benjamin G. Alvero",
    province: "Sorsogon",
    municipality: "Barcelona",
    products: [
      {
        name: "Eggplant",
        variety: "Black Beauty",
        maxQuantityKg: 95,
        growTimeDays: 85,
        pricePerKg: 27,
        description: "Glossy, deep purple variety favored in rural markets.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      },
      {
        name: "Cassava",
        variety: "Golden",
        maxQuantityKg: 115,
        growTimeDays: 145,
        pricePerKg: 21,
        description: "Golden-skinned cassava with starchy, smooth flesh.",
        imageUrl: "https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg"
      }
    ]
  },
  
  {
    name: 'Mark L. Dela Cruz',
    province: 'Camarines Sur',
    municipality: 'Del Gallego',
    products: [
      {
        name: 'Rice',
        variety: 'IR64',
        maxQuantityKg: 300,
        growTimeDays: 120,
        pricePerKg: 40,
        description: 'High-yielding rice variety popular in Albay with soft grains and good aroma.',
        imageUrl: 'https://www.bigas-online.com/cdn/shop/products/well-milledrice_1024x1024@2x.jpg?v=1600423751'
      },
      {
        name: 'Corn',
        variety: 'Lagkitan',
        maxQuantityKg: 250,
        growTimeDays: 90,
        pricePerKg: 25,
        description: 'Glutinous white corn often grown in upland areas of Albay.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/9698Cuisine_foods_in_Bulacan_55.jpg'
      },
      {
        name: 'Coconut',
        variety: 'Dwarf',
        maxQuantityKg: 200,
        growTimeDays: 365,
        pricePerKg: 15,
        description: 'Common coconut variety in Bicol, used for copra and oil.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Abaca',
        variety: 'Inosa',
        maxQuantityKg: 100,
        growTimeDays: 240,
        pricePerKg: 75,
        description: 'Fiber crop used in handicrafts and ropes, native to the region.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Banana',
        variety: 'Lakatan',
        maxQuantityKg: 150,
        growTimeDays: 180,
        pricePerKg: 35,
        description: 'Sweet banana variety highly marketable in local towns.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Cassava',
        variety: 'Lakan 1',
        maxQuantityKg: 120,
        growTimeDays: 150,
        pricePerKg: 20,
        description: 'Starchy root crop grown in sandy loam soils of Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Sweet Potato',
        variety: 'VSP 6',
        maxQuantityKg: 140,
        growTimeDays: 100,
        pricePerKg: 22,
        description: 'Popular root crop used in snacks and delicacies.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Taro',
        variety: 'Gabi',
        maxQuantityKg: 90,
        growTimeDays: 130,
        pricePerKg: 28,
        description: 'Used in local Bicol Express and other dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Pili Nut',
        variety: 'Katutubo',
        maxQuantityKg: 60,
        growTimeDays: 365,
        pricePerKg: 200,
        description: 'Premium nut known for buttery flavor, native to Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Peanut',
        variety: 'NSIC Pn11',
        maxQuantityKg: 80,
        growTimeDays: 100,
        pricePerKg: 30,
        description: 'Legume crop important in Albay’s crop rotation system.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Tomato',
        variety: 'Diamante Max',
        maxQuantityKg: 100,
        growTimeDays: 75,
        pricePerKg: 38,
        description: 'Commonly grown in home gardens and farms in Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Eggplant',
        variety: 'Mistisa',
        maxQuantityKg: 90,
        growTimeDays: 85,
        pricePerKg: 26,
        description: 'Vegetable staple for pinakbet and grilled dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      }
    ]
  },
  {
    name: 'Juan E. Enriquez',
    products: [
      {
        name: 'Rice',
        variety: 'IR64',
        maxQuantityKg: 300,
        growTimeDays: 120,
        pricePerKg: 40,
        description: 'High-yielding rice variety popular in Albay with soft grains and good aroma.',
        imageUrl: 'https://www.bigas-online.com/cdn/shop/products/well-milledrice_1024x1024@2x.jpg?v=1600423751'
      },
      {
        name: 'Corn',
        variety: 'Lagkitan',
        maxQuantityKg: 250,
        growTimeDays: 90,
        pricePerKg: 25,
        description: 'Glutinous white corn often grown in upland areas of Albay.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/9698Cuisine_foods_in_Bulacan_55.jpg'
      },
      {
        name: 'Coconut',
        variety: 'Dwarf',
        maxQuantityKg: 200,
        growTimeDays: 365,
        pricePerKg: 15,
        description: 'Common coconut variety in Bicol, used for copra and oil.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Abaca',
        variety: 'Inosa',
        maxQuantityKg: 100,
        growTimeDays: 240,
        pricePerKg: 75,
        description: 'Fiber crop used in handicrafts and ropes, native to the region.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Banana',
        variety: 'Lakatan',
        maxQuantityKg: 150,
        growTimeDays: 180,
        pricePerKg: 35,
        description: 'Sweet banana variety highly marketable in local towns.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Cassava',
        variety: 'Lakan 1',
        maxQuantityKg: 120,
        growTimeDays: 150,
        pricePerKg: 20,
        description: 'Starchy root crop grown in sandy loam soils of Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Sweet Potato',
        variety: 'VSP 6',
        maxQuantityKg: 140,
        growTimeDays: 100,
        pricePerKg: 22,
        description: 'Popular root crop used in snacks and delicacies.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Taro',
        variety: 'Gabi',
        maxQuantityKg: 90,
        growTimeDays: 130,
        pricePerKg: 28,
        description: 'Used in local Bicol Express and other dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Pili Nut',
        variety: 'Katutubo',
        maxQuantityKg: 60,
        growTimeDays: 365,
        pricePerKg: 200,
        description: 'Premium nut known for buttery flavor, native to Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Peanut',
        variety: 'NSIC Pn11',
        maxQuantityKg: 80,
        growTimeDays: 100,
        pricePerKg: 30,
        description: 'Legume crop important in Albay’s crop rotation system.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Tomato',
        variety: 'Diamante Max',
        maxQuantityKg: 100,
        growTimeDays: 75,
        pricePerKg: 38,
        description: 'Commonly grown in home gardens and farms in Albay.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      },
      {
        name: 'Eggplant',
        variety: 'Mistisa',
        maxQuantityKg: 90,
        growTimeDays: 85,
        pricePerKg: 26,
        description: 'Vegetable staple for pinakbet and grilled dishes.',
        imageUrl: 'https://m.media-amazon.com/images/I/91Q5aUMp+7L.jpg'
      }
    ]
  }
].map((farmer) => {
  const farmerId = farmerIdCounter++;
  const products = farmer.products.map((product, index) => ({
    productId: `${farmerId}${String.fromCharCode(65 + index)}`,
    ...product,
  }));
  return {
    farmerId,
    ...farmer,
    products,
  };
});

export default farmerData;
