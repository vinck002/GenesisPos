// src/features/sales/pages/SalesScreen.jsx
import React from 'react';
import CartPanel from "../components/CartPanel.jsx";
import ProductGrid from "../components/ProductGrid.jsx";

const SalesScreen = () => {
    return (
        <div className="flex flex-col h-screen h-screen max-h-screen">

            {/* Main Area */}
            <div className="flex flex-1 h-screen max-h-screen ">


                {/* Product List Area */}
                <section className="flex-1 h-full  max-h-screen p-1 overflow-y-auto bg-white border-r border-gray-200">
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
                            {Array.from({ length:30 }).map((_, i) => (
                                <ProductGrid i={i} productName={"Pico y pala"} price={10.00} />

                            ))}
                        </div>

                </section>

                {/* Cart / Checkout */}
                <aside className="w-1/3 p-2 m-0  bg-gray-50  h-full">
                    <CartPanel />
                </aside>
            </div>


        </div>
    );
};

export default SalesScreen;
