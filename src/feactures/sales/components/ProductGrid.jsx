import React from "react";


const ProductGrid = ({i,productName, price}) => {
    return (
        <div key={i} className="p-4 border rounded shadow hover:shadow-lg">
            <div className="h-24 bg-gray-100 rounded mb-2" />
            <h2 className="text-sm font-medium mb-1">{productName}</h2>
            <p className="text-gray-700 font-bold">${price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
                Add
            </button>
        </div>
    );
}


export default ProductGrid;