export const RESTAURANT_INFO = {
  name: 'Olisipo Bistro',
  tagline: 'Authentic Soul, Modern Plate.',
  description: 'Experience the heart of Lisbon through traditional flavors reimagined for the modern palate. Located in the historic Alfama district.',
  location: 'Largo de São Rafael, 1100-340 Lisboa, Portugal',
  phone: '+351 210 123 456',
  email: 'hello@olisipobistro.com',
  openingHours: [
    { days: 'Tuesday - Thursday', hours: '12:30 - 15:00, 19:30 - 23:00' },
    { days: 'Friday - Saturday', hours: '12:30 - 15:00, 19:30 - 00:00' },
    { days: 'Sunday', hours: '12:30 - 16:00 (Brunch)' },
    { days: 'Monday', hours: 'Closed' }
  ],
  socials: {
    facebook: 'https://facebook.com/olisipobistro',
    instagram: 'https://instagram.com/olisipobistro',
    tripadvisor: 'https://tripadvisor.com'
  }
};

export const MENU_HIGHLIGHTS = [
  {
    category: 'Petiscos',
    items: [
      { name: 'Amêijoas à Bulhão Pato', description: 'Fresh clams with garlic, coriander, and lemon.', price: '16€' },
      { name: 'Peixinhos da Horta', description: 'Tempura green beans with house-made tartar sauce.', price: '12€' }
    ]
  },
  {
    category: 'Pratos Principais',
    items: [
      { name: 'Bacalhau à Olisipo', description: 'Confit cod, roasted peppers, and potato textures.', price: '24€' },
      { name: 'Arroz de Marisco', description: 'Rich seafood rice with lobster, prawns, and mussels.', price: '32€' }
    ]
  },
  {
    category: 'Doces',
    items: [
      { name: 'Toucinho do Céu', description: 'Traditional almond cake with orange zest.', price: '8€' },
      { name: 'Sericaia com Ameixa de Elvas', description: 'Egg pudding paired with Elvas candied plums.', price: '9€' }
    ]
  }
];
