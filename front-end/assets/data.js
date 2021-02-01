export const categories = [
  {
    id: 1,
    name: "mineral"
  },
  {
    id: 2,
    name: "Soda"
  },
  {
    id: 3,
    name: "beer"
  },
  {
    id: 4,
    name: "energy"
  },
  {
    id: 5,
    name: "milk"
  },
  {
    id: 6,
    name: "juice"
  }
];

export const products = [
  // Mineral.
  {
    name: "Voss Artesian",
    categoryId: 1,
    price: 10,
    qty: 0,
    image: "bottle"
  },
  {
    name: "Saint Geron",
    categoryId: 1,
    price: 15,
    qty: 1,
    image: "bottle"
  },
  {
    name: "Hildon",
    categoryId: 1,
    price: 20,
    qty: 11,
    image: "bottle"
  },
  {
    name: "Evian",
    categoryId: 1,
    price: 30,
    qty: 12,
    image: "bottle"
  },
  {
    name: "Fiji",
    categoryId: 1,
    price: 20,
    qty: 11,
    image: "bottle"
  },
  {
    name: "Gerolsteiner",
    categoryId: 1,
    price: 30,
    qty: 0,
    image: "bottle"
  },
  {
    name: "Voss Artesian",
    categoryId: 1,
    price: 10,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Perrier",
    categoryId: 1,
    price: 30,
    qty: 15,
    image: "bottle"
  },
  // End of Mineral.

  // Soda
  {
    name: "Gerolsteiner",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "San Benedetto",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Valdimeti",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Voss",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Badoit",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Apollinaris",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "Mont Fleur",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  {
    name: "San Pellegrino",
    categoryId: 2,
    price: 40,
    qty: 15,
    image: "bottle"
  },
  // End of soda.
  // Beer
  {
    name: "Chang",
    categoryId: 3,
    price: 49,
    qty: 10,
    image: "bottle"
  },
  {
    name: "Leo",
    categoryId: 3,
    price: 49,
    qty: 10,
    image: "bottle"
  },
  // End of Beer
  {
    name: "Shark bite",
    categoryId: 4,
    price: 49,
    qty: 10,
    image: "bottle"
  },
  {
    name: "Four most",
    categoryId: 5,
    price: 49,
    qty: 10,
    image: "bottle"
  },
  {
    name: "Doi khum",
    categoryId: 6,
    price: 10,
    qty: 1,
    image: "bottle"
  },
].map(product => ({ id: uuidv4(), ...product}))

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
