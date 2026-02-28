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

const scriptDescription = `🌟 Exclusive Mapping for FiveM: Transform the LTD Central 🌟

🚀 Bring your city to life with this spectacular mapping for FiveM! 🚀

🌐 Main Features:
1️⃣ 🌟 Preserve the Original Essence: The vanilla ground floor of the LTD Central is kept intact to maintain the classic format loved by players.
2️⃣ 📦 Spacious Storage Area: A functional side space perfect for storing goods or hosting private staff meetings. Ideal for business roleplay and organization.
3️⃣ 🏙️ Exclusive Upper Floor: Sky Bar Terrace: A chillout area featuring shishas, pool tables, and a relaxed vibe for maximum social interaction. 🌌 Luxury Restaurant: An enclosed area with a modern and elegant design, perfect for exclusive events, romantic dinners, or high-level meetings. 🍷🍴
4️⃣ 💡 Redesigned Aesthetic: Vibrant LED lights and neons turn the LTD Central into the most intense and eye-catching spot in the city. Guaranteed to grab everyone’s attention! 🌈✨

🎮 Why Choose This Mapping?
✔️ Enhanced Functionality: Provide your players with new, immersive spaces for roleplay.
✔️ Innovative Aesthetics: Refresh and modernize one of Los Santos’ most iconic locations.
✔️ Seamless Integration: Designed to enhance without disrupting the classic format.

🔥 Make your LTD Central the most coveted hotspot in the city. Now is the time to upgrade your server with this premium-quality mapping! 🔥

📩 Contact us now to get this incredible mapping and elevate your roleplay experience to the next level. 🌟`;

export const products: Product[] = [
  {
    id: 1,
    name: "MARIE'BLACHERE",
    category: 'Negocios',
    imageId: 'product1',
    price: 99.83,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: scriptDescription,
  },
  {
    id: 2,
    name: 'NOTWEN ALL SCRIPTS (40% OFF)',
    category: 'Packs',
    imageId: 'unique-scripts',
    price: 747.78,
    originalPrice: 1246.30,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
  },
  {
    id: 3,
    name: 'NOTWEN CLOTHING + CHARACTER CREATOR + PEDMENU',
    category: 'Negocios',
    imageId: 'product3',
    price: 60.50,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: scriptDescription,
  },
  {
    id: 4,
    name: 'NOTWEN HOUSING',
    category: 'Negocios',
    imageId: 'product4',
    price: 80.00,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
    description: scriptDescription,
  },
  {
    id: 5,
    name: 'POSTULACIÓN STAFF (SOPORTE)',
    category: 'Postulaciones',
    imageId: 'new-game-modes',
    price: 0.00,
    features: ['Formación incluida', 'Comunidad activa', 'Ascensos'],
    description: 'Buscamos personas comprometidas para ayudar a nuestra comunidad en el día a día.',
  },
  {
    id: 6,
    name: 'LIDERAZGO FACCION (LSPD)',
    category: 'Postulaciones',
    imageId: 'product2',
    price: 0.00,
    features: ['Gestión de equipo', 'Rol serio', 'Responsabilidad'],
    description: '¿Tienes experiencia liderando cuerpos policiales? Esta es tu oportunidad.',
  },
];
