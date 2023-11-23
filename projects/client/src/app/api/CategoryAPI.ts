export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const url = 'http://localhost:3000/api/category';

export async function getAllCategories(): Promise<Response> {
  const response = await fetch(url);
  return response;
}
