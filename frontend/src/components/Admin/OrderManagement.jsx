import { useState } from "react";

const OrderManagement = () => {
    const [orders, setOrders] = useState([
        {
            id: "#67540ced3376121b361a0ed0",
            customer: "Isha Sharma",
            total: "$199.96",
            status: "Processing",
        },
        {
            id: "#67540d3ca67b4a70e434e092",
            customer: "Admin User",
            total: "$40.00",
            status: "Processing",
        },
        {
            id: "#675bf2c6ca77bd83eefd7a18",
            customer: "Admin User",
            total: "$39.99",
            status: "Processing",
        },
        {
            id: "#675c24b09b88827304bd5cc1",
            customer: "Admin User",
            total: "$39.99",
            status: "Processing",
        },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    const markAsDelivered = (id) => {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === id ? { ...order, status: "Delivered" } : order
            )
        );
    };

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
                                        key={order.id}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 font-mono text-xs text-gray-600">
                                            {order.id}
                                        </td>
                                        <td className="px-6 py-4">{order.customer}</td>
                                        <td className="px-6 py-4 font-semibold">{order.total}</td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={order.status}
                                                onChange={(e) =>
                                                    handleStatusChange(order.id, e.target.value)
                                                }
                                                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
                                            >
                                                <option>Processing</option>
                                                <option>Shipped</option>
                                                <option>Delivered</option>
                                                <option>Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => markAsDelivered(order.id)}
                                                className={`px-4 py-1.5 rounded-md text-white text-sm font-medium transition ${order.status === "Delivered"
                                                    ? "bg-green-400 cursor-not-allowed"
                                                    : "bg-green-600 hover:bg-green-700"
                                                    }`}
                                                disabled={order.status === "Delivered"}
                                            >
                                                {order.status === "Delivered"
                                                    ? "Delivered"
                                                    : "Mark as Delivered"}
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            ) : (
                                <tr colSpan={5} className="p-4 text-center text-gray-500">No Orders found.</tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;
