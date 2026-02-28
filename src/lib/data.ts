
export type Product = {
  id: number;
  name: string;
  category: string;
  imageId: string;
  price: number;
  originalPrice?: number;
  features: string[];
  description?: string;
};

const formatDescription = (desc: string, loc: string, workers: string, services: string) => {
  return `${desc}\n\n📍 Ubicación: ${loc}\n👥 Trabajadores: ${workers}\n🥐 Servicios y productos: ${services}`;
};

export const products: Product[] = [
  {
    id: 1,
    name: "MARIE'BLACHERE",
    category: 'Negocios',
    imageId: 'product1',
    price: 99.83,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: formatDescription(
      "Panaderia pequeña, donde pararte a comprar un buen bocadillo o una barra de pan.",
      "Grove Street",
      "Min 3 / Max 8",
      "Bollería, bocadillos fríos y calientes, comida para llevar."
    ),
  },
  {
    id: 3,
    name: "BENNY'S",
    category: 'Negocios',
    imageId: 'product3',
    price: 60.50,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: formatDescription(
      "Taller mecánico especializado en modificaciones de alto rendimiento.",
      "Strawberry",
      "Min 5 / Max 15",
      "Tuning motor, estética avanzada y reparaciones."
    ),
  },
  {
    id: 4,
    name: 'BEAN MACHINE',
    category: 'Negocios',
    imageId: 'product4',
    price: 80.00,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: formatDescription(
      "Cafetería icónica de Los Santos, el lugar perfecto para un café rápido y un donut.",
      "Mission Row",
      "Min 2 / Max 6",
      "Café, donuts, bollería y snacks."
    ),
  },
  {
    id: 8,
    name: 'PEARLS',
    category: 'Negocios',
    imageId: 'pearls',
    price: 120.00,
    features: ['Tuning avanzado', 'Pinturas únicas', 'Plug & Play'],
    description: formatDescription(
      "Taller mecánico especializado en modificaciones de alto rendimiento.",
      "Strawberry",
      "Min 5 / Max 15",
      "Tuning motor, estética avanzada y reparaciones."
    ),
  },
  {
    id: 9,
    name: 'BAHAMAS DISCO',
    category: 'Negocios',
    imageId: 'bahamas',
    price: 150.00,
    features: ['Sistema de DJ', 'Luces LED', 'Bebidas'],
    description: formatDescription(
      "La mejor discoteca de la ciudad para el ocio nocturno.",
      "Del Perro Pier",
      "Min 4 / Max 20",
      "Venta de alcohol, zona VIP y eventos musicales."
    ),
  },
  {
    id: 10,
    name: 'LTD GAS STATION',
    category: 'Negocios',
    imageId: 'ltd',
    price: 45.00,
    features: ['Gasolina', 'Tienda 24/7', 'Robos configurados'],
    description: formatDescription(
      "Gasolinera estratégica con tienda de conveniencia incorporada.",
      "Centro de Los Santos",
      "Min 1 / Max 3",
      "Repostaje, snacks y kit de reparación."
    ),
  },
  {
    id: 11,
    name: 'VANILLA UNICORN',
    category: 'Negocios',
    imageId: 'vanilla',
    price: 180.00,
    features: ['Rol adulto', 'Gestión de club', 'Barra'],
    description: formatDescription(
      "Club nocturno icónico con gestión empresarial completa.",
      "Strawberry",
      "Min 5 / Max 25",
      "Bailes, bebidas premium y control de seguridad."
    ),
  },
  {
    id: 12,
    name: 'PILLBOX HOSPITAL',
    category: 'Negocios',
    imageId: 'pillbox',
    price: 200.00,
    features: ['Sistema médico', 'Farmacia', 'Ambulancias'],
    description: formatDescription(
      "Centro hospitalario avanzado con sistemas de tratamiento médico.",
      "Pillbox Hill",
      "Min 10 / Max 40",
      "Revive, curación de heridas y recetas médicas."
    ),
  },
  {
    id: 13,
    name: 'BURGERSHOT',
    category: 'Negocios',
    imageId: 'burgershot',
    price: 75.00,
    features: ['Cocina interactiva', 'Delivery', 'Drive Thru'],
    description: formatDescription(
      "Restaurante de comida rápida con sistema de cocina dinámica.",
      "Legion Square",
      "Min 3 / Max 10",
      "Venta de hamburguesas, patatas y refrescos."
    ),
  },
  {
    id: 2,
    name: 'NOTWEN ALL SCRIPTS (40% OFF)',
    category: 'Packs',
    imageId: 'product-city',
    price: 747.78,
    originalPrice: 1246.30,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: "El paquete definitivo que incluye todos nuestros activos con un descuento masivo.",
  },
  {
    id: 5,
    name: 'POSTULACIÓN STAFF (SOPORTE)',
    category: 'Postulaciones',
    imageId: 'product-city',
    price: 0.00,
    features: ['Formación incluida', 'Comunidad activa', 'Ascensos'],
    description: 'Buscamos personas comprometidas para ayudar a nuestra comunidad en el día a día.',
  },
  {
    id: 6,
    name: 'LIDERAZGO FACCION (LSPD)',
    category: 'Postulaciones',
    imageId: 'product-city',
    price: 0.00,
    features: ['Gestión de equipo', 'Rol serio', 'Responsabilidad'],
    description: '¿Tienes experiencia liderando cuerpos policiales? Esta es tu oportunidad.',
  },
  {
    id: 7,
    name: 'VIP BRONCE',
    category: 'VIP',
    imageId: 'product-city',
    price: 15.00,
    features: ['Acceso prioritario', 'Ropa exclusiva', 'Discord Role'],
    description: 'Nivel básico de membresía VIP con beneficios esenciales.',
  },
];
