export interface IProduct {
    id: number;
    name: string;
    slug: string;
    price: number;
    category: string;
    description: string;
    images: string[];
    rating: number[]
}