import { useEffect, useRef, useState } from "react"
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from "../components/Products/FilterSidebar";
import { Sidebar } from "lucide-react";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const ProductCollection = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousedown", handleClickOutside);
    })

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
                {
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
                    name: "AMMY BLOCK KURTA SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8632.jpg?v=1752749712&width=540",
                    rating: 4,
                    reviews: 6,
                    originalPrice: 4749,
                    discountedPrice: 3499,
                    discount: "26% off",
                    tag: "EXTRA 20% OFF",
                },
                {
                    id: 9,
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
                    id: 10,
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
                    id: 11,
                    name: "AMMY BLOCK KURTA SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8632.jpg?v=1752749712&width=540",
                    rating: 4,
                    reviews: 6,
                    originalPrice: 4749,
                    discountedPrice: 3499,
                    discount: "26% off",
                    tag: "EXTRA 20% OFF",
                },
                {
                    id: 12,
                    name: "AMMY BLOCK KURTA SET",
                    img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8632.jpg?v=1752749712&width=540",
                    rating: 4,
                    reviews: 6,
                    originalPrice: 4749,
                    discountedPrice: 3499,
                    discount: "26% off",
                    tag: "EXTRA 20% OFF",
                },
            ]
            setProducts(fetchProducts);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            <button onClick={toggleSidebar} className="lg:hidden border p-2 fles justify-center items-center">
                <FaFilter className="mr-2" />
            </button>
            <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-65 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />
            </div>
            <div className="flex-grow-4">
                <h2 className="text-2xl uppercase mb-4">All Collections</h2>
                <SortOptions />

                <ProductGrid products={products} />
            </div>
        </div>
    )
}

export default ProductCollection
