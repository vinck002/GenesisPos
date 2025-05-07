import { useState } from "react";
import Footer from "./footer.jsx";
import RightSide from "./rightSide.jsx";
import MainContent from "./MainContent.jsx";
import AppHeader from "./header.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // optional

export default function AppRoot() {
    const [showRightSide, setShowRightSide] = useState(true);

    return (
        <div className="flex flex-col h-screen">
            <AppHeader />

            <main className="flex flex-1  overflow-hidden">
                {/* Left: Main content */}
                <MainContent   isExpanded={!showRightSide} />

                {/* Toggle Arrow */}
                <button
                    onClick={() => setShowRightSide(!showRightSide)}
                    className={`absolute top-4/8 transform -translate-1/2 z-1000 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700 transition-all duration-300
                    ${showRightSide ? 'right-[10%]' : 'right-2'}`}
                     >
                    {showRightSide ? <FiChevronRight /> : <FiChevronLeft />}
                </button>


                {/* Right: Cart panel */}
                <RightSide
                    show={showRightSide}
                    className={`transition-transform duration-300 ease-in-out ${showRightSide ? 'translate-x-0' : 'translate-x-full'}`}
                />
            </main>

            <Footer />
        </div>
    );
}
