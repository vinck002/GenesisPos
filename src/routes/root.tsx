import { useState } from "react";
import Footer from "./footer.tsx";
import RightSide from "./rightSide.tsx";
import MainContent from "./MainContent.tsx";
import AppHeader from "./header.tsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // optional

export default function AppRoot() {
    const [showRightSide, setShowRightSide] = useState(false);

    return (
        <div className="flex flex-col h-screen">
            <AppHeader />

            <main className="flex flex-1  overflow-hidden">


                {/* Left: Main content */}
               <div className="flex flex-1  h-screen max-h-screen ">
                   <MainContent   isExpanded={!showRightSide} />


               </div>

                {/* Toggle Arrow */}
                <button
                    onClick={() => setShowRightSide(!showRightSide)}
                    className={`absolute top-4/8 transform -translate-1 z-1000 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 transition-all duration-300
                    ${showRightSide ? 'right-[13.5%]' : 'right-1'}`}
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
