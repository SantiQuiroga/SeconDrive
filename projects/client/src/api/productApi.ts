export interface ProductApi {
  id: string;
  categoryid: string;
  name: string;
  description: string;
  brand: string;
  image: string;
  price: number;
  stock: number;
  unitSold: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
}

const url = 'http://localhost:3000/api/product';

export default async function createProduct(): Promise<Response> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}

export async function getAllProducts(): Promise<Response> {
  const response = await fetch(url);
  return response;
}
