import { useState } from "react";
import { Menu, X, ShoppingCart, UserCog } from "lucide-react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const cartItemCount = 5;

    const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

    const navItems = [
        { name: "Saris", to: "#" },
        { name: "Suits", to: "#" },
        { name: "Collections", to: "/collections/all" },
        { name: "Bottom", to: "#" },
        { name: "About", to: "#" },
    ];

    return (
        <>
            <nav className="bg-white border-b shadow-md w-full z-50 rounded-b-xl">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* 🔹 Logo */}
                        <Link
                            to="/"
                            className="text-2xl font-extrabold text-indigo-600 whitespace-nowrap"
                        >
                            Prerna
                            <span className="text-gray-800 font-semibold">
                                {" "}
                                Matching Center
                            </span>
                        </Link>

                        {/* 🔹 Center Nav Links (Hidden on mobile) */}
                        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="hover:text-indigo-600 transition duration-150"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* 🔹 Right Icons (Always visible) */}
                        <div className="flex items-center space-x-3 sm:space-x-5">
                            <Link
                                to="/profile"
                                className="text-gray-700 hover:text-indigo-600 transition"
                            >
                                <UserCog size={22} />
                            </Link>

                            <button
                                onClick={toggleCartDrawer}
                                className="relative text-gray-700 hover:text-indigo-600 transition"
                            >
                                <ShoppingCart size={22} />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ring-2 ring-white">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>

                            {/* Searchbar hidden on very small screens */}
                            <div className="hidden sm:flex w-40 md:w-50">
                                <Searchbar />
                            </div>

                            {/* <button className="px-2 sm:px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition duration-150 text-sm sm:text-base">
                                Login
                            </button> */}

                            {/* 🔹 Hamburger (Visible on small devices) */}
                            <button
                                className="md:hidden text-gray-700 hover:text-indigo-600 p-2 rounded-lg transition"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 🔹 Mobile Dropdown for Nav Links only */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-gray-50 border-t py-3 px-4 shadow-inner">
                        <div className="flex flex-col space-y-3 font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-indigo-600 block py-1 px-3 rounded-lg hover:bg-indigo-50 transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    );
};

export default Navbar;
