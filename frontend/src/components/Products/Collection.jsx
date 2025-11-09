import { Link } from "react-router-dom";

const Collection = ({ products, loading, error }) => {
    if (loading) return <p className="text-center text-gray-600 py-8">Loading collections...</p>;
    if (error) return <p className="text-center text-red-500 py-8">Error: {error}</p>;
    if (!Array.isArray(products) || products.length === 0) {
        return <p className="text-center text-gray-600 py-8">No products available</p>;
    }

    return (
        <div className="px-3 sm:px-6 lg:px-12 py-10 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">New Collections</h2>

            {/* ✅ 2 columns even on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product, index) => (
                    <Link
                        key={`${product._id || index}-${product.name}`}
                        to={`/product/${product._id}`}
                        className="block"
                    >
                        <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white relative">
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={
                                        product.images && product.images.length > 0
                                            ? product.images[0].url
                                            : "/placeholder.jpg"
                                    }
                                    alt={product.name || "Product image"}
                                    className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"> Quick view </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-3 sm:p-4">
                                <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-800 truncate mb-1">
                                    {product.name}
                                </h3>

                                <div className="flex items-center flex-wrap text-gray-900 font-medium text-sm sm:text-base">
                                    ₹{product.discountPrice ? product.discountPrice.toLocaleString() : product.price.toLocaleString()}
                                    {product.discount && (
                                        <span className="text-xs text-red-500 ml-2">({product.discount}% OFF)</span>
                                    )}
                                </div>
                                <div className="flex items-center text-yellow-500 text-sm mb-1"> {"★".repeat(Math.floor(product.rating || 0))} {product.rating % 1 !== 0 ? "½" : ""} <span className="text-gray-600 ml-2"> {product.numReviews || 0} reviews </span> </div>
                                {product.discountPrice && (
                                    <p className="text-gray-400 line-through text-xs sm:text-sm">
                                        ₹{product.price.toLocaleString()}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collection;
