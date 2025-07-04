// data/farmerData.js
export const farmerData = [
  {
    name: 'Aling Jane',
    products: [
      {
        name: 'Rice',
        variety: 'IR64',
        maxQuantityKg: 300,
        growTimeDays: 120,
        pricePerKg: 40,
        description: 'High-yielding rice variety popular in Albay with soft grains and good aroma.',
        imageUrl: 'https://images.unsplash.com/photo-1590080877940-5c4b6bb9f747?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Corn',
        variety: 'Lagkitan',
        maxQuantityKg: 250,
        growTimeDays: 90,
        pricePerKg: 25,
        description: 'Glutinous white corn often grown in upland areas of Albay.',
        imageUrl: 'https://images.unsplash.com/photo-1615484477260-3b3560c1334c?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Coconut',
        variety: 'Dwarf',
        maxQuantityKg: 200,
        growTimeDays: 365,
        pricePerKg: 15,
        description: 'Common coconut variety in Bicol, used for copra and oil.',
        imageUrl: 'https://images.unsplash.com/photo-1582284542688-8be31a01dfc4?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Abaca',
        variety: 'Inosa',
        maxQuantityKg: 100,
        growTimeDays: 240,
        pricePerKg: 75,
        description: 'Fiber crop used in handicrafts and ropes, native to the region.',
        imageUrl: 'https://images.unsplash.com/photo-1620290984691-39b2b3ccac13?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Banana',
        variety: 'Lakatan',
        maxQuantityKg: 150,
        growTimeDays: 180,
        pricePerKg: 35,
        description: 'Sweet banana variety highly marketable in local towns.',
        imageUrl: 'https://images.unsplash.com/photo-1574226516831-e1dff420e37d?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Cassava',
        variety: 'Lakan 1',
        maxQuantityKg: 120,
        growTimeDays: 150,
        pricePerKg: 20,
        description: 'Starchy root crop grown in sandy loam soils of Albay.',
        imageUrl: 'https://images.unsplash.com/photo-1624692893871-51964eb1ae6d?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Sweet Potato',
        variety: 'VSP 6',
        maxQuantityKg: 140,
        growTimeDays: 100,
        pricePerKg: 22,
        description: 'Popular root crop used in snacks and delicacies.',
        imageUrl: 'https://images.unsplash.com/photo-1605478371575-5c0c3c964198?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Taro',
        variety: 'Gabi',
        maxQuantityKg: 90,
        growTimeDays: 130,
        pricePerKg: 28,
        description: 'Used in local Bicol Express and other dishes.',
        imageUrl: 'https://images.unsplash.com/photo-1612182067661-470ee8ac53aa?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Pili Nut',
        variety: 'Katutubo',
        maxQuantityKg: 60,
        growTimeDays: 365,
        pricePerKg: 200,
        description: 'Premium nut known for buttery flavor, native to Albay.',
        imageUrl: 'https://images.unsplash.com/photo-1624692893291-6de67f0ec147?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Peanut',
        variety: 'NSIC Pn11',
        maxQuantityKg: 80,
        growTimeDays: 100,
        pricePerKg: 30,
        description: 'Legume crop important in Albay’s crop rotation system.',
        imageUrl: 'https://images.unsplash.com/photo-1585238342028-7ebf56b44c6f?auto=format&fit=crop&w=600&q=60'
      },
      {
        name: 'Tomato',
        variety: 'Diamante Max',
        maxQuantityKg: 100,
        growTimeDays: 75,
        pricePerKg: 38,
        description: 'Commonly grown in home gardens and farms in Albay.',
        imageUrl: ''
      },
      {
        name: 'Eggplant',
        variety: 'Mistisa',
        maxQuantityKg: 90,
        growTimeDays: 85,
        pricePerKg: 26,
        description: 'Vegetable staple for pinakbet and grilled dishes.',
        imageUrl: 'https://images.unsplash.com/photo-1592928307861-248ddd37f9e7?auto=format&fit=crop&w=600&q=60'
      }
    ]
  },
  {
    name: 'Mang Jose',
    products: Array.from({ length: 20 }, (_, i) => ({
      name: `Root Crop ${i + 1}`,
      variety: `Variety ${i + 1}`,
      maxQuantityKg: 100 + i * 10,
      growTimeDays: 60 + i * 5,
      pricePerKg: 20 + i * 2,
      description: `Root crop commonly planted by Mang Jose in highlands.`,
      imageUrl: `https://via.placeholder.com/150?text=Root+Crop+${i + 1}`
    }))
  },
  {
    name: 'Ka Pedro',
    products: Array.from({ length: 20 }, (_, i) => ({
      name: `Leafy Green ${i + 1}`,
      variety: `GreenType ${i + 1}`,
      maxQuantityKg: 80 + i * 5,
      growTimeDays: 40 + i * 4,
      pricePerKg: 18 + i * 3,
      description: `Locally grown leafy vegetable from Ka Pedro's garden.`,
      imageUrl: `https://via.placeholder.com/150?text=Leafy+Green+${i + 1}`
    }))
  },
  {
    name: 'Ate Nena',
    products: Array.from({ length: 20 }, (_, i) => ({
      name: `Fruit ${i + 1}`,
      variety: `SweetVariety ${i + 1}`,
      maxQuantityKg: 120 + i * 6,
      growTimeDays: 90 + i * 3,
      pricePerKg: 30 + i * 2,
      description: `Juicy and sweet seasonal fruit harvested by Ate Nena.`,
      imageUrl: `https://via.placeholder.com/150?text=Fruit+${i + 1}`
    }))
  },
  {
    name: 'Tatay Luis',
    products: Array.from({ length: 20 }, (_, i) => ({
      name: `Vegetable ${i + 1}`,
      variety: `VeggieLine ${i + 1}`,
      maxQuantityKg: 90 + i * 4,
      growTimeDays: 70 + i * 2,
      pricePerKg: 22 + i * 1.5,
      description: `Fresh vegetable grown organically by Tatay Luis.`,
      imageUrl: `https://via.placeholder.com/150?text=Vegetable+${i + 1}`
    }))
  }
];
