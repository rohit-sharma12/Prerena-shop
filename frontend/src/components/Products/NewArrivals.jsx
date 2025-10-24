import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
    { id: 1, name: "Purple Cotton Suit Set", price: 600, src: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540" },
    { id: 2, name: "Purple Cotton Suit Set", price: 600, src: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540" },
    { id: 3, name: "Purple Cotton Suit Set", price: 600, src: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8583.jpg?v=1752749708&width=540" },
    { id: 4, name: "Carnation Tissue Saree", price: 10100.00, src: "https://www.bunaai.com/cdn/shop/files/Indianwearjan24-6993.jpg?v=1751446909&width=540" },
    { id: 5, name: "Purple Cotton Suit Set", price: 600, src: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540" },
];


const NewArrivals = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount =
                direction === "left"
                    ? -scrollRef.current.offsetWidth
                    : scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full py-10 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-8">
                New Arrivals
            </h2>

            <div className="relative max-w-7xl mx-auto">
                {/* Left arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Product cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-10"
                >
                    {products?.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="flex-none w-72 rounded-lg overflow-hidden shadow-md bg-white relative"
                            >

                                <span className="absolute left-2 top-2 bg-white text-red-600 text-xs font-semibold px-2 py-1 border-l-4 border-red-600 uppercase">
                                    Online Exclusive
                                </span>

                                <img
                                    src={product.src}
                                    alt={product.name}
                                    className="w-full h-[420px] object-cover"
                                />

                                <div className="p-4">
                                    <Link to={`/product/${product.id}`} className="block hover:underline">
                                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                                            {product.name}
                                        </h4>
                                    </Link>
                                    

                                    {/* Pricing */}
                                    <div className="text-sm">
                                        <p className="font-bold text-red-500">
                                            Rs. {product.price}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};
export default NewArrivals
