import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchAllOrders,
    updateOrderStatus,
} from "../../redux/slice/adminOrderSlice";

const OrderManagement = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    const { orders, loading, error } = useSelector((state) => state.adminOrders);

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        } else {
            dispatch(fetchAllOrders());
        }
    }, [dispatch, user, navigate]);

    const handleStatusChange = (orderId, status) => {
        dispatch(updateOrderStatus({ id: orderId, status }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Order Management
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-3">Order ID</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Total Price</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr
                                        key={order._id}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 font-mono text-xs text-gray-600">
                                           #{order._id}
                                        </td>
                                        <td className="px-6 py-4">{order.user?.name}</td>
                                        <td className="px-6 py-4 font-semibold">₹ {order?.totalPrice}</td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={order.status}
                                                onChange={(e) =>
                                                    handleStatusChange(order._id, e.target.value)
                                                }
                                                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
                                            >
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => handleStatusChange(order._id, "Delivered")}
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
                                            >
                                                Mark as Deliverd
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="p-4 text-center text-gray-500"
                                    >
                                        No Orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default OrderManagement;
