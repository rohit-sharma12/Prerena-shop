import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdminProducts } from "../../redux/slice/adminProductSlice";
import { deleteProduct } from "../../redux/slice/adminProductSlice";

const ProductManagement = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.adminProducts);
    
    useEffect(() => {
        dispatch(fetchAdminProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id));
        }
    };

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:{error}</p>

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
                                    key={product._id}
                                    className="hover:bg-gray-50 transition-all border-b"
                                >
                                    <td className="py-3 px-4">{product.name}</td>
                                    <td className="py-3 px-4">₹{product.price.toLocaleString()}</td>
                                    <td className="py-3 px-4">{product.sku}</td>
                                    <td className="py-3 px-4 text-center space-x-3">
                                        <Link to={`/admin/products/${product._id}/edit`}>
                                            <button
                                                className="text-yellow-500 hover:text-yellow-700"
                                                title="Edit"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product._id)}
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
