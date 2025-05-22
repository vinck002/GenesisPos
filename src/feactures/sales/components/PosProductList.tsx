import React from "react";
import {ProductEntity} from "../../types/productType";
import useCartStore from "../store/useCartStore";


const ProductList = (product:ProductEntity) => {
    const { addItem } = useCartStore();
    return (
        <div className="p-4 border rounded shadow hover:shadow-lg">
            <div className="h-24 bg-gray-100 rounded mb-2" />
            <h2 className="text-sm font-medium mb-1">{product.name}</h2>
            <p className="text-gray-700 font-bold">${product.price.toFixed(2)}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
               onClick={() => addItem(product)}     >
                Add to Cart
            </button>
        </div>
    );
}


export default ProductList;