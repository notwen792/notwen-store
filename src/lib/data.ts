export type Product = {
  id: number;
  name: string;
  category: string;
  imageId: string;
  price: number;
  originalPrice?: number;
  features: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'NOTWEN POLICE + EMS',
    category: 'Scripts',
    imageId: 'product1',
    price: 99.83,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
  },
  {
    id: 2,
    name: 'NOTWEN ALL SCRIPTS (40% OFF)',
    category: 'Packs',
    imageId: 'product2',
    price: 747.78,
    originalPrice: 1246.30,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
  },
  {
    id: 3,
    name: 'NOTWEN CLOTHING + CHARACTER CREATOR + PEDMENU',
    category: 'Scripts',
    imageId: 'product3',
    price: 60.50,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
  },
  {
    id: 4,
    name: 'NOTWEN HOUSING',
    category: 'Scripts',
    imageId: 'product4',
    price: 80.00,
    features: ['QBCore & ESX Compatible', 'Plug & Play', 'Support'],
  },
];
