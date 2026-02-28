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

export const products: Product[] = [
  {
    id: 1,
    name: "MARIE'BLACHERE",
    category: 'Negocios',
    imageId: 'img-marie',
    price: 99.83,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: "Panaderia pequeña, donde pararte a comprar un buen bocadillo o una barra de pan.\n\n📍 Ubicación: Grove Street\n👥 Trabajadores: Min 3 / Max 8\n🥐 Servicios y productos: Bollería, bocadillos fríos y calientes, comida para llevar.",
  },
  {
    id: 3,
    name: "BENNY'S",
    category: 'Negocios',
    imageId: 'img-bennys',
    price: 60.50,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: "Taller mecánico especializado en modificaciones de alto rendimiento.\n\n📍 Ubicación: Strawberry\n👥 Trabajadores: Min 5 / Max 15\n🥐 Servicios y productos: Tuning motor, estética avanzada y reparaciones.",
  },
  {
    id: 4,
    name: 'BEAN MACHINE',
    category: 'Negocios',
    imageId: 'img-bean',
    price: 80.00,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: "Cafetería icónica de Los Santos, el lugar perfecto para un café rápido y un donut.\n\n📍 Ubicación: Mission Row\n👥 Trabajadores: Min 2 / Max 6\n🥐 Servicios y productos: Café, donuts, bollería y snacks.",
  },
  {
    id: 8,
    name: 'UpnAtom',
    category: 'Negocios',
    imageId: 'img-upnatom',
    price: 120.00,
    features: ['Exclusividad', 'Eventos VIP', 'Plug & Play'],
    description: "Restaurante de comida rápida con temática atómica, el lugar ideal para una hamburguesa rápida y deliciosa.\n\n📍 Ubicación: Del Perro Pier\n👥 Trabajadores: Min 3 / Max 10\n🥐 Servicios y productos: Hamburguesas, batidos, patatas fritas y servicio rápido.",
  },
  {
    id: 9,
    name: 'BURGERSHOT',
    category: 'Negocios',
    imageId: 'img-burgershot',
    price: 150.00,
    features: ['Cocina rápida', 'Menú icónico', 'Gestión de stock'],
    description: "Restaurante de comida rápida especializado en las mejores hamburguesas de la ciudad.\n\n📍 Ubicación: Vespucci Canals\n👥 Trabajadores: Min 2 / Max 8\n🥐 Servicios y productos: Hamburguesas, patatas, bebidas y helados.",
  },
  {
    id: 11,
    name: 'VANILLA UNICORN',
    category: 'Negocios',
    imageId: 'img-vanilla',
    price: 180.00,
    features: ['Rol adulto', 'Gestión de club', 'Barra'],
    description: "Club nocturno icónico con gestión empresarial completa.\n\n📍 Ubicación: Strawberry\n👥 Trabajadores: Min 5 / Max 25\n🥐 Servicios y productos: Bailes, bebidas premium y control de seguridad.",
  },
  {
    id: 12,
    name: 'PILLBOX HOSPITAL',
    category: 'Negocios',
    imageId: 'img-pillbox',
    price: 200.00,
    features: ['Sistema médico', 'Farmacia', 'Ambulancias'],
    description: "Centro hospitalario avanzado con sistemas de tratamiento médico.\n\n📍 Ubicación: Pillbox Hill\n👥 Trabajadores: Min 10 / Max 40\n🥐 Servicios y productos: Revive, curación de heridas y recetas médicas.",
  },
  {
    id: 2,
    name: 'NOTWEN ALL SCRIPTS (40% OFF)',
    category: 'Packs',
    imageId: 'img-city',
    price: 747.78,
    originalPrice: 1246.30,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: "El paquete definitivo que incluye todos nuestros activos con un descuento masivo.",
  },
  {
    id: 5,
    name: 'POSTULACIÓN STAFF (SOPORTE)',
    category: 'Postulaciones',
    imageId: 'img-city',
    price: 0.00,
    features: ['Formación incluida', 'Comunidad activa', 'Ascensos'],
    description: 'Buscamos personas comprometidas para ayudar a nuestra comunidad en el día a día.',
  },
  {
    id: 6,
    name: 'LIDERAZGO FACCION (LSPD)',
    category: 'Postulaciones',
    imageId: 'img-city',
    price: 0.00,
    features: ['Gestión de equipo', 'Rol serio', 'Responsabilidad'],
    description: '¿Tienes experiencia liderando cuerpos policiales? Esta es tu oportunidad.',
  },
  {
    id: 7,
    name: 'VIP BRONCE',
    category: 'VIP',
    imageId: 'img-city',
    price: 15.00,
    features: ['Acceso prioritario', 'Ropa exclusiva', 'Discord Role'],
    description: 'Nivel básico de membresía VIP con beneficios esenciales.',
  },
];