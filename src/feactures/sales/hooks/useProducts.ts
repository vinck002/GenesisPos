import {useEffect, useState} from "react";

import {ProductEntity} from "../../types/productType";
import {getProducts} from "../../products/services/productService";


const useProducts = () =>{
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

       fetchProducts();
    }, []);

    return {
        products,
        loading,
        error,

    };

};

export default useProducts;