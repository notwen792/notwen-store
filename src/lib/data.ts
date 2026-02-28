
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

const genericDescription = `Negocio de alta calidad para tu servidor FiveM.
Optimizado y listo para usar (Plug & Play).

📍 Ubicación: Consultar mapa
👥 Trabajadores: Min 2 / Max 10
🥐 Servicios: Gestión completa y sistema de facturación.`;

const marieBlachereDescription = `Panaderia pequeña, donde pararte a comprar un buen bocadillo o una barra de pan.

📍 Ubicación: Grove Street
👥 Trabajadores: Min 3 / Max 8
🥐 Servicios y productos: Bollería, bocadillos fríos y calientes, comida para llevar.`;

export const products: Product[] = [
  {
    id: 1,
    name: "MARIE'BLACHERE",
    category: 'Negocios',
    imageId: 'product1',
    price: 99.83,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: marieBlachereDescription,
  },
  {
    id: 3,
    name: 'NOTWEN CLOTHING',
    category: 'Negocios',
    imageId: 'product3',
    price: 60.50,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: `Tienda de ropa de lujo con probadores y catálogo avanzado.

📍 Ubicación: Legion Square
👥 Trabajadores: Min 2 / Max 5
👕 Servicios: Customización de personajes y guardado de outfits.`,
  },
  {
    id: 4,
    name: 'NOTWEN HOUSING',
    category: 'Negocios',
    imageId: 'product4',
    price: 80.00,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: `Sistema de casas de última generación con inmobiliaria.

📍 Ubicación: Toda la ciudad
👥 Trabajadores: Gestión por inmobiliaria
🏠 Servicios: Alquiler, venta y sistema de mobiliario.`,
  },
  {
    id: 8,
    name: 'BENNY\'S CUSTOMS',
    category: 'Negocios',
    imageId: 'product-city',
    price: 120.00,
    features: ['Tuning avanzado', 'Pinturas únicas', 'Plug & Play'],
    description: `Taller mecánico especializado en modificaciones de alto rendimiento.

📍 Ubicación: Strawberry
👥 Trabajadores: Min 5 / Max 15
🔧 Servicios: Tuning motor, estética avanzada y reparaciones.`,
  },
  {
    id: 9,
    name: 'BAHAMAS DISCO',
    category: 'Negocios',
    imageId: 'product-city',
    price: 150.00,
    features: ['Sistema de DJ', 'Luces LED', 'Bebidas'],
    description: `La mejor discoteca de la ciudad para el ocio nocturno.

📍 Ubicación: Del Perro Pier
👥 Trabajadores: Min 4 / Max 20
🍸 Servicios: Venta de alcohol, zona VIP y eventos musicales.`,
  },
  {
    id: 10,
    name: 'LTD GAS STATION',
    category: 'Negocios',
    imageId: 'product-city',
    price: 45.00,
    features: ['Gasolina', 'Tienda 24/7', 'Robos configurados'],
    description: `Gasolinera estratégica con tienda de conveniencia incorporada.

📍 Ubicación: Centro de Los Santos
👥 Trabajadores: Min 1 / Max 3
⛽ Servicios: Repostaje, snacks y kit de reparación.`,
  },
  {
    id: 11,
    name: 'VANILLA UNICORN',
    category: 'Negocios',
    imageId: 'product-city',
    price: 180.00,
    features: ['Rol adulto', 'Gestión de club', 'Barra'],
    description: `Club nocturno icónico con gestión empresarial completa.

📍 Ubicación: Strawberry
👥 Trabajadores: Min 5 / Max 25
💃 Servicios: Bailes, bebidas premium y control de seguridad.`,
  },
  {
    id: 12,
    name: 'PILLBOX HOSPITAL',
    category: 'Negocios',
    imageId: 'product-city',
    price: 200.00,
    features: ['Sistema médico', 'Farmacia', 'Ambulancias'],
    description: `Centro hospitalario avanzado con sistemas de tratamiento médico.

📍 Ubicación: Pillbox Hill
👥 Trabajadores: Min 10 / Max 40
🚑 Servicios: Revive, curación de heridas y recetas médicas.`,
  },
  {
    id: 13,
    name: 'BURGERSHOT',
    category: 'Negocios',
    imageId: 'product1',
    price: 75.00,
    features: ['Cocina interactiva', 'Delivery', 'Drive Thru'],
    description: `Restaurante de comida rápida con sistema de cocina dinámica.

📍 Ubicación: Legion Square
👥 Trabajadores: Min 3 / Max 10
🍔 Servicios: Venta de hamburguesas, patatas y refrescos.`,
  },
  {
    id: 2,
    name: 'NOTWEN ALL SCRIPTS (40% OFF)',
    category: 'Packs',
    imageId: 'product-city',
    price: 747.78,
    originalPrice: 1246.30,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: 'El paquete definitivo que incluye todos nuestros activos con un descuento masivo.',
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
