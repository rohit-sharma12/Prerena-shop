import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from '../redux/slice/productsSlice';

const ProductCollection = () => {
    const { collection } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const queryParams = Object.fromEntries([...searchParams]);

    const sidebarRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    useEffect(() => {
        dispatch(fetchProductsByFilters({ collection, ...queryParams }));
        
    }, [dispatch, collection, searchParams]);


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
                    <ProductGrid products={products} loading={loading} error={error} />
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
