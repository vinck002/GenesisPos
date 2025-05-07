import React from 'react';

const CartPanel = () => {
    return (
        <aside className="w-full md:w-full p-4 bg-gray-50 border-l border-gray-200 flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">🛒 Current Sale</h2>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                    <div>
                        <p className="font-medium">Espresso</p>
                        <p className="text-sm text-gray-600">Qty: 2</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">$5.00</p>
                        <button className="text-xs text-red-500 hover:underline">Remove</button>
                    </div>
                </div>

                {/* Add more items dynamically later */}
            </div>

            {/* Totals */}
            <div className="mt-6 border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$10.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.80</span>
                </div>
                <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>$10.80</span>
                </div>

                {/* Discount Input */}
                <input
                    type="text"
                    placeholder="Discount code or notes"
                    className="mt-4 w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring focus:ring-blue-400"
                />

                {/* Checkout Button */}
                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm">
                    Proceed to Checkout
                </button>

                {/* Quick Actions */}
                <div className="mt-4 flex justify-between gap-2">
                    <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 text-sm">
                        Hold Sale
                    </button>
                    <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm">
                        Clear
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CartPanel;
