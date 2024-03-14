const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': 'assets/img/cats-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'assets/img/cats-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'assets/img/cats-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'assets/img/cats-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'assets/img/cats-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'assets/img/cats-6.jpg',
  'description': '',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': 'assets/img/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'assets/img/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'assets/img/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'assets/img/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'assets/img/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'assets/img/cars-6.jpg',
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': 'assets/img/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'assets/img/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'assets/img/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'assets/img/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'assets/img/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'assets/img/flowers-6.jpg',
  'description': '',
}];


const imageCollection = {
  flowers, cats, cars,
};

const GAME_TYPES = [
  { type: 'cats' },
  { type: 'flowers'},
  { type: 'cars' },
];

const results = [
  { name: 'Marie', stepsCount: 16 },
  { name: 'Ada', stepsCount: 12 },
  { name: 'Kate', stepsCount: 19 }
];

const getImages = (type) => {
  const imagePairs = imageCollection[type].map(item => {
   return {...item, id: `${item.id}-1`}
  })
  const mergedPairs = [...imageCollection[type], ...imagePairs];
  return mergedPairs.sort(() => 0.5 - Math.random());
}

export {results, cats, cars, flowers, imageCollection, getImages, GAME_TYPES}