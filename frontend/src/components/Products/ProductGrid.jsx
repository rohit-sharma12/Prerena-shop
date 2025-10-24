import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "BLUSH AARI WORK ANARKALI SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4,
        reviews: 7,
        originalPrice: 11249,
        discountedPrice: 5499,
        discount: "51% off",
        tag: "BESTSELLER",
    },
    {
        id: 2,
        name: "BLUSH BLOSSOM ANARKALI SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4.5,
        reviews: 7,
        originalPrice: 7499,
        discountedPrice: 2299,
        discount: "69% off",
        tag: "BESTSELLER",
        extra: "EXTRA 20% OFF",
    },
    {
        id: 3,
        name: "BLUSH GROVE PRINTED SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4,
        reviews: 7,
        originalPrice: 4749,
        discountedPrice: 2599,
        discount: "45% off",
        extra: "EXTRA 20% OFF",
    },
    {
        id: 4,
        name: "BLUSH AARI WORK ANARKALI SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4,
        reviews: 7,
        originalPrice: 11249,
        discountedPrice: 5499,
        discount: "51% off",
        tag: "BESTSELLER",
    },
    {
        id: 5,
        name: "BLUSH BLOSSOM ANARKALI SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4.5,
        reviews: 7,
        originalPrice: 7499,
        discountedPrice: 2299,
        discount: "69% off",
        tag: "BESTSELLER",
        extra: "EXTRA 20% OFF",
    },
    {
        id: 6,
        name: "BLUSH GROVE PRINTED SUIT SET",
        img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
        rating: 4,
        reviews: 7,
        originalPrice: 4749,
        discountedPrice: 2599,
        discount: "45% off",
        extra: "EXTRA 20% OFF",
    },
];

const ProductGrid = () => {
    return (
        <div className="px-2 py-5 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className='block'>
                        <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                            {/* Image section */}
                            <div className="relative overflow-hidden ">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Tags */}
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                                    {product.tag && (
                                        <span className="bg-white text-gray-700 text-xs font-semibold px-2 py-1 border rounded">
                                            {product.tag}
                                        </span>
                                    )}
                                    {product.extra && (
                                        <span className="bg-white text-pink-600 text-xs font-semibold px-2 py-1 border rounded">
                                            {product.extra}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Details section */}
                            <div className="p-4">
                                <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">
                                    {product.name}
                                </h3>

                                <div className="flex items-center text-yellow-500 text-sm mb-1">
                                    {"★".repeat(Math.floor(product.rating))}
                                    {product.rating % 1 !== 0 ? "½" : ""}
                                    <span className="text-gray-600 ml-2">{product.reviews} reviews</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-400 line-through text-sm">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                    <span className="text-gray-900 font-semibold">
                                        ₹{product.discountedPrice.toLocaleString()}
                                    </span>
                                    <span className="text-pink-600 text-sm font-medium">{product.discount}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default ProductGrid;
