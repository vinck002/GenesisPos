import React from "react";
import useCartStore from "../store/useCartStore";


// @ts-ignore
const CardItemList = ({ itenId,productName, qty, price }) => {
    const { removeItem } = useCartStore();

    const total = (price * qty).toFixed(2);

    return (
        <div className="flex justify-between items-start border-b pb-1 text-sm">
            {/* Product Info */}
            <div className="leading-tight space-y-[2px]">
                <p className="font-medium text-gray-900">{productName}</p>
                <p className="text-xs text-gray-600">Unit: ${price.toFixed(2)}</p>
                <p className="text-xs text-gray-600">Qty: {qty}</p>
            </div>

            {/* Actions & Total */}
            <div className="text-right flex flex-col items-end justify-between h-full">
                <p className="font-semibold text-gray-800">${total}</p>
                <button
                    className="text-xs text-red-500 hover:underline"
                    onClick={() => removeItem(itenId)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CardItemList;
