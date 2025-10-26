import { useState } from "react";
import { Edit2, Trash2, PackagePlus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Blush Aari Work Anarkali Suit", price: 11249, sku: "ANR001" },
        { id: 2, name: "Emerald Green Kurta Set", price: 9450, sku: "KRT002" },
        { id: 3, name: "Ivory Cotton Saree", price: 7250, sku: "SAR003" },
    ]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((p) => p.id !== id));
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                            <th className="py-3 px-4 border-b">Product Name</th>
                            <th className="py-3 px-4 border-b">Price (₹)</th>
                            <th className="py-3 px-4 border-b">SKU</th>
                            <th className="py-3 px-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="hover:bg-gray-50 transition-all border-b"
                                >
                                    <td className="py-3 px-4">{product.name}</td>
                                    <td className="py-3 px-4">₹{product.price.toLocaleString()}</td>
                                    <td className="py-3 px-4">{product.sku}</td>
                                    <td className="py-3 px-4 text-center space-x-3">
                                        <Link to={`/admin/products/${product.id}/edit`}>
                                            <button
                                                className="text-yellow-500 hover:text-yellow-700"
                                                title="Edit"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-500 hover:text-red-700"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center py-6 text-gray-500 italic"
                                >
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
