import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const ProductCollection = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    id: 1,
                    name: "AKILA CHIFFON SUIT SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
                    rating: 4.5,
                    reviews: 10,
                    originalPrice: 7749,
                    discountedPrice: 3749,
                    discount: "52% off",
                    tag: "BESTSELLER",
                },
                {
                    id: 2,
                    name: "ALLOY MIRRORWORK ANARKALI",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8598.jpg?v=1752749712&width=540",
                    rating: 4,
                    reviews: 1,
                    originalPrice: 6000,
                    discountedPrice: 3499,
                    discount: "42% off",
                    tag: "EXTRA 20% OFF",
                },
                {
                    id: 3,
                    name: "AMBER BROWN UMBRELLA SUIT SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8610.jpg?v=1752749712&width=540",
                    rating: 4.5,
                    reviews: 8,
                    originalPrice: 6999,
                    discountedPrice: 3299,
                    discount: "53% off",
                    tag: "EXTRA 20% OFF",
                },
                {
                    id: 4,
                    name: "AMMY BLOCK KURTA SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8632.jpg?v=1752749712&width=540",
                    rating: 4,
                    reviews: 6,
                    originalPrice: 4749,
                    discountedPrice: 3499,
                    discount: "26% off",
                    tag: "EXTRA 20% OFF",
                },
            ];
            setProducts(fetchProducts);
        }, 1000);
    }, []);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* ---------- MOBILE HEADER ---------- */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm sticky top-0 z-40">
                <h2 className="text-xl font-semibold text-gray-800">All Collections</h2>
                <button
                    onClick={toggleSidebar}
                    className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-rose-600 transition"
                >
                    <FaFilter /> Filters
                </button>
            </div>

            {/* ---------- SIDEBAR ---------- */}
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:static lg:translate-x-0 lg:w-1/8 lg:shadow-none border-r border-gray-100`}
            >
                <div className="h-full overflow-y-auto">
                    <FilterSidebar />
                </div>
            </div>

            <main className="flex-1 p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <h2 className="hidden lg:block text-3xl font-bold text-gray-800 tracking-wide uppercase">
                        All Collections
                    </h2>
                    <div className="flex justify-end">
                        <SortOptions />
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-2xl p-4">
                    <ProductGrid products={products} />
                </div>
            </main>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default ProductCollection;
