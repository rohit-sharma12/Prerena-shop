import { Package, Clock, CheckCircle, Truck, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Profile = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const orders = [
                {
                    id: '1323',
                    shippingAddress: { city: "Delhi", street: "MG Road", nearfamous: "Hansraj Dairy", zipCode: 110053 },
                    orderItem: [
                        {
                            name: "Blush Aari Work Anarkali Suit",
                            image: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
                        },
                    ],
                    createdAt: new Date(),
                    totalPrice: 5499,
                    status: "Delivered",
                },
                {
                    id: '7823',
                    shippingAddress: { city: "Delhi", street: "Ring Road", nearfamous: "Lotus Mall", zipCode: 110052 },
                    orderItem: [
                        {
                            name: "Amber Brown Umbrella Suit",
                            image: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
                        },
                    ],
                    createdAt: new Date(),
                    totalPrice: 3299,
                    status: "Shipped",
                },
                {
                    id: '5973',
                    shippingAddress: { city: "Delhi", street: "street no.4", nearfamous: "Caunat Place", zipCode: 110032 },
                    orderItem: [
                        {
                            name: "Amber Brown Umbrella Suit",
                            image: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
                        },
                    ],
                    createdAt: new Date(),
                    totalPrice: 3299,
                    status: "Shipped",
                },
            ];
            setOrders(orders);
        }, 1000);
    }, []);

    const getStatusIcon = (status) => {
        switch (status) {
            case "Delivered":
                return <CheckCircle className="text-green-500" size={18} />;
            case "Shipped":
                return <Truck className="text-blue-500" size={18} />;
            case "Cancelled":
                return <XCircle className="text-red-500" size={18} />;
            default:
                return <Clock className="text-gray-400" size={18} />;
        }
    };

    return (
        <div className="min-h-screen py-10 px-6 md:px-16 ">
            {/* Profile Header */}
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-lg border border-rose-100 rounded-3xl p-8 mb-10">
                <h1 className="text-3xl font-semibold text-black mb-3">My Profile</h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-medium text-gray-800">Isha Sharma</h2>
                        <div className="flex items-center text-gray-600 mt-1">
                            rohit12@gmail.com
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button className="bg-red-500 hover:bg-rose-600 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-300">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Orders Section */}
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-lg border border-rose-100 rounded-3xl p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <Package className="text-black mr-2" /> My Orders
                </h2>

                <div className="space-y-6">
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div
                                key={order.id}
                                className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-4 last:border-none"
                            >
                                <div className="flex items-center space-x-4 w-full md:w-1/2">
                                    <img
                                        src={order.orderItem[0].image}
                                        alt={order.orderItem[0].name}
                                        className="w-20 h-24 object-cover rounded-lg shadow-sm"
                                    />
                                    <div>
                                        <h3 className="font-medium text-gray-800">{order.orderItem[0].name}</h3>
                                        <div className="text-black text-sm ">#{order.id}</div>
                                        <div className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                            {new Date(order.createdAt).toLocaleDateString()}{" "}
                                            <Clock size={14} /> {new Date(order.createdAt).toLocaleTimeString()}
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="mt-3 md:mt-0 flex items-center justify-between w-full md:w-1/3">
                                    <div className="text-right md:text-center">
                                        <p className="text-gray-700 font-semibold">₹{order.totalPrice}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        {getStatusIcon(order.status)}
                                        <span
                                            className={`font-medium text-sm ${order.status === "Delivered"
                                                ? "text-green-600"
                                                : order.status === "Shipped"
                                                    ? "text-blue-600"
                                                    : order.status === "Cancelled"
                                                        ? "text-red-600"
                                                        : "text-gray-500"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="mt-3 bg-rose-50 p-3 rounded-xl">
                                        <p className="text-gray-700 text-sm">

                                            {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.nearfamous}` : "NA"}
                                        </p>

                                    </div>
                                </div>

                            </div>
                        ))

                    ) : (
                        <div className="py-4 px-4 text-center text-gray-500">You have no orders</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
