import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
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
];

const Collection = () => {
    return (
        <div className="px-6 py-12 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                New Collections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {collections.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className='block'>
                        <div
                            className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative"
                        >
                         
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-[420px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute bottom-3 left-3">
                                    <span className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 border rounded">
                                        {product.tag}
                                    </span>
                                </div>

                               
                                <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                                    Quick view
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-sm font-medium text-gray-800 truncate mb-1">
                                    {product.name}
                                </h3>

                               
                                <div className="flex items-center text-yellow-500 text-sm mb-1">
                                    {"★".repeat(Math.floor(product.rating))}
                                    {product.rating % 1 !== 0 ? "½" : ""}
                                    <span className="text-gray-600 ml-2">
                                        {product.reviews} reviews
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-400 line-through text-sm">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                    <span className="text-gray-900 font-semibold">
                                        ₹{product.discountedPrice.toLocaleString()}
                                    </span>
                                    <span className="text-pink-600 text-sm font-medium">
                                        {product.discount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link >
                ))}
            </div>
            
        </div>
    );
};

export default Collection;

