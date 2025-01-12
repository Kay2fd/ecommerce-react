import images from './images';

const coffees = [
  {
    title: 'Classic Cappuccino',
    price: '$4.50',
    tags: 'HOT | ITALIAN STYLE',
  },
  {
    title: 'Café au Lait',
    price: '$3.95',
    tags: 'HOT | FRENCH STYLE',
  },
  {
    title: 'Vienna Coffee',
    price: '$5.25',
    tags: 'HOT | AUSTRIAN STYLE',
  },
  {
    title: 'Affogato',
    price: '$4.50',
    tags: 'COLD | ITALIAN STYLE',
  },
  {
    title: 'Irish Coffee',
    price: '$5.95',
    tags: 'HOT | IRISH STYLE',
  },
  {
    title: 'Einspänner',
    price: '$4.95',
    tags: 'HOT | VIENNESE STYLE',
  },
  {
    title: 'Crème Brûlée Latte',
    price: '$5.50',
    tags: 'HOT | FRENCH STYLE',
  },
];

const foods = [
  {
    title: 'Croque Monsieur',
    price: '$7.25',
    tags: 'Ham | Gruyère Cheese | Béchamel | Sourdough',
  },
  {
    title: 'Quiche Lorraine',
    price: '$8.50',
    tags: 'Bacon | Gruyère | Cream | Pastry',
  },
  {
    title: 'Belgian Waffle',
    price: '$5.95',
    tags: 'Berries | Whipped Cream | Maple Syrup',
  },
  {
    title: 'Eggs Benedict',
    price: '$7.95',
    tags: 'Poached Eggs | Ham | Hollandaise | English Muffin',
  },
  {
    title: 'Danish Pastry Basket',
    price: '$5.25',
    tags: 'Assorted Danish | Butter | Jam | Honey',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { coffees, foods, awards };
