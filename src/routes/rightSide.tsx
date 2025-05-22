import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Sales', path: '/pos/sales' },
    { name: 'Returns', path: '/pos/returns' },
    { name: 'Hold Orders', path: '/pos/holds' },
    { name: 'Reports', path: '/pos/reports' },
];

export default function RightSide({ show }) {
    return (
        <aside
            className={`p-4 bg-white border-l border-gray-200 h-full w-73 fixed right-0 top-0 z-40 transition-transform duration-300 ease-in-out ${
                show ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <h2 className="text-lg font-semibold mb-6">POS Options</h2>
            <nav className="space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded transition hover:bg-blue-50 ${
                                isActive ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-700'
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
