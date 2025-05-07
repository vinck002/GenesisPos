// src/features/sales/pages/SalesScreen.jsx
import React from 'react';
import CartPanel from "../components/CartPanel.jsx";

const SalesScreen = () => {
    return (
        <div className="flex flex-col h-screen">

            {/* Main Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Product List Area */}
                <section className="w-10/12 p-4 overflow-y-auto bg-white border-r border-gray-200">
                    {/* Search & Filters */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Product Grid (Placeholder) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="p-4 border rounded shadow hover:shadow-lg">
                                <div className="h-24 bg-gray-100 rounded mb-2" />
                                <h2 className="text-sm font-medium mb-1">Product Name</h2>
                                <p className="text-gray-700 font-bold">$9.99</p>
                                <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cart / Checkout */}
                <aside className="w-1/3 p-4 overflow-y-auto bg-gray-50">
                    <CartPanel />
                </aside>
            </div>


        </div>
    );
};

export default SalesScreen;
