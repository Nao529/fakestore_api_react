import type { productType } from "../types/productType";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<productType[]> {
    return fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json() as Promise<productType[]>;
        });
}