// =====================
// ITEMS.JS
// All jewelry items data
// Add/edit items here!!
// =====================

const items = [
  {
    id: 1,
    name: 'Gold Solitaire Ring',
    category: 'rings',
    price: 4500,
    image: '',
    description: 'A classic gold solitaire ring. Perfect for everyday wear or special occasions.'
  },
  {
    id: 2,
    name: 'Silver Chain Necklace',
    category: 'necklaces',
    price: 2800,
    image: '',
    description: 'Elegant sterling silver chain necklace. Lightweight and durable.'
  },
  {
    id: 3,
    name: 'Pearl Drop Earrings',
    category: 'earrings',
    price: 1800,
    image: '',
    description: 'Classic pearl drop earrings with gold-plated hooks.'
  },
  {
    id: 4,
    name: 'Gold Tennis Bracelet',
    category: 'bracelets',
    price: 6500,
    image: '',
    description: 'Stunning gold tennis bracelet with cubic zirconia stones.'
  },
  {
    id: 5,
    name: 'Stainless Steel Watch',
    category: 'watches',
    price: 8900,
    image: '',
    description: 'Classic stainless steel watch with leather strap. Water resistant.'
  },
  {
    id: 6,
    name: 'Rose Gold Ring',
    category: 'rings',
    price: 3800,
    image: '',
    description: 'Beautiful rose gold band ring. Simple yet elegant.'
  },
  {
    id: 7,
    name: 'Gold Pendant Necklace',
    category: 'necklaces',
    price: 3200,
    image: '',
    description: 'Delicate gold pendant necklace with heart design.'
  },
  {
    id: 8,
    name: 'Silver Hoop Earrings',
    category: 'earrings',
    price: 1200,
    image: '',
    description: 'Classic silver hoop earrings. Available in small and large sizes.'
  },
]

// Format price to Philippine Peso
function formatPrice(price) {
  return '₱' + price.toLocaleString('en-PH')
}
