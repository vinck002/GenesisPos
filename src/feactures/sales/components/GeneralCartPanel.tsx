import React from 'react';

import useCartStore from "../store/useCartStore";
// @ts-ignore
import CardItemList from "./CartItemsList";


const GeneralCartPanel = () => {
    const { items, clearCart } = useCartStore();

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <aside className="flex flex-col h-full w-full max-h-screen p-1 bg-gray-50 border-l border-gray-200 ">

            <div className="pb-2 bg-orange-100 h-[5%]">
                <h2 className="text-lg font-semibold ">🛒 Current Sale</h2>
            </div>


            {/* Cart Items List */}
            <div className="h-[50%] overflow-y-auto  space-y-3">
                {
                    items.map(item => (
                        <CardItemList key={item.id} itenId={item.id} productName={item.name} qty={item.qty} price={item.price} />
                    ))
                }
                {/* Add more items dynamically later */}
            </div>



            {/* Totals */}
            <div className="flex-1 mt-4 border-t border-b-blue-950  pt-1 space-y-1 text-sm ">


                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.80</span>
                </div>
                <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>

                {/* Discount Input */}
                <input
                    type="text"
                    placeholder="Discount code or notes"
                    className="mt-4 w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring focus:ring-blue-400"
                />

                {/* Checkout Button */}
                <button className="w-full mt-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm">
                    Proceed to Checkout
                </button>

                {/* Quick Actions */}
                <div className="mt-2 flex justify-between gap-2">
                    <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 text-sm">
                        Hold Sale
                    </button>
                    <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm"
                            onClick={clearCart}>
                        Clear
                    </button>
                </div>

            </div>
        </aside>
    );
};

export default GeneralCartPanel;
