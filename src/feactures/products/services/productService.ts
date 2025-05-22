// Simulate an API or fetch from local data
import {ProductEntity} from "../../types/productType";

export const getProducts = async () : Promise<ProductEntity[]>   => {
    // Simulated delay (you can remove for real API)
    await new Promise(res => setTimeout(res, 500));

    return [
        { id: 1, name: 'Coffee', price: 2.5 },
        { id: 2, name: 'Sandwich', price: 5.0 },
        { id: 3, name: 'Water', price: 1.0 },
        { id: 4, name: 'cookie', price: 3.5 },
        { id: 5, name: 'Sandwich guarina', price: 5.0 },
        { id: 6, name: 'sugar cane from imalaya', price: 1.0 },
        { id: 7, name: 'Coffee cream', price: 2.5 },
        { id: 8, name: 'Sandwich salty', price: 5.0 },
        { id: 9, name: 'Water mercado', price: 1.0 },
        { id: 10, name: 'Coffee', price: 2.5 },
        { id: 11, name: 'Sandwich', price: 5.0 },
        { id: 12, name: 'Water', price: 1.0 },
    ];
};