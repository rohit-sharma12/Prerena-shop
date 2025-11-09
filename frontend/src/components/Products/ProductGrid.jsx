import { Link } from "react-router-dom";

const Collection = ({ products = [], loading, error }) => {
    if (loading) return <p className="text-center py-8 text-gray-500">Loading collections...</p>;
    if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;
    if (!products.length)
        return <p className="text-center py-8 text-gray-500">No products available</p>;

    return (
        <div className="px-2 sm:px-5 lg:px-12 py-10 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                New Collections
            </h2>

            {/* ✅ Two per row on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product, index) => (
                    <Link
                        key={product._id || index}
                        to={`/product/${product._id}`}
                        className="group relative block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        {/* ---------- Image Section ---------- */}
                        <div className="relative">
                            <img
                                src={
                                    product.images?.[0]?.url ||
                                    "/placeholder.jpg"
                                }
                                alt={product.name}
                                className="w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                                <span className="bg-white text-gray-900 font-medium px-4 py-1.5 rounded-full text-xs sm:text-sm">
                                    View Details
                                </span>
                            </div>

                            {/* Tags (New / Sale / Custom) */}
                            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                {product.isNew && (
                                    <span className="bg-white/90 text-gray-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                                        NEW
                                    </span>
                                )}
                                {product.isSale && (
                                    <span className="bg-pink-100 text-pink-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                                        SALE
                                    </span>
                                )}
                                {product.tag && (
                                    <span className="bg-white/90 text-gray-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                                        {product.tag}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* ---------- Details Section ---------- */}
                        <div className="p-3 sm:p-4">
                            {/* Product Name */}
                            <h3 className="text-[13px] sm:text-sm font-medium text-gray-800 mb-1 line-clamp-1">
                                {product.name}
                            </h3>

                            <div className="flex items-center text-yellow-500 text-sm mb-1"> {"★".repeat(Math.floor(product.rating || 0))} {product.rating % 1 !== 0 ? "½" : ""} <span className="text-gray-600 ml-2"> {product.numReviews || 0} reviews </span> </div>

                            {/* Price Section */}
                            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                                    ₹
                                    {product.discountPrice
                                        ? product.discountPrice.toLocaleString()
                                        : product.price?.toLocaleString()}
                                </span>
                                {product.discountPrice && (
                                    <span className="text-gray-400 line-through text-xs sm:text-sm">
                                        ₹{product.price?.toLocaleString()}
                                    </span>
                                )}
                                {product.discount && (
                                    <span className="text-red-500 text-xs sm:text-sm font-medium">
                                        ({product.discount}% OFF)
                                    </span>
                                )}
                            </div>

                            {/* Sizes */}
                            {product.sizes && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {product.sizes.map((size, i) => (
                                        <span
                                            key={i}
                                            className="border border-gray-300 text-gray-700 text-[10px] sm:text-xs font-medium px-1.5 py-0.5 rounded-md"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Collection;
