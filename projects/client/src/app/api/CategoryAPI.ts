export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getAllCategories(): Promise<Response> {
  const response = await fetch('/api/category');
  return response;
}
