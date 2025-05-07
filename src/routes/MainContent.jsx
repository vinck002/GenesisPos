import { Outlet } from "react-router-dom";

const MainContent = ({ isExpanded }) => {
    return (
        <section
            className={`transition-all duration-300 ease-in-out  h-full overflow-auto bg-white border-r border-gray-200 
            ${ isExpanded ? "flex-grow" : "basis-7/8" } p-4`}
        >
            {/* Search + Categories */}
            {/* Product Grid */}
            <Outlet />
        </section>
    );
};

export default MainContent;
