import { Package, Clock, CheckCircle, Truck, XCircle } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slice/authSlice";
import { clearCart } from "../redux/slice/cartSlice";
import { fetchUserOrders } from "../redux/slice/orderSlice";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(fetchUserOrders());
    }, [dispatch]);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        navigate("/login");
    };

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

    const handleRowClick = (orderId) => {
        navigate(`/orders/${orderId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Flatten all order items for display
    const flattenedOrders = orders?.flatMap(order =>
        order.orderItems.map((item) => ({
            ...item,
            orderId: order._id,
            status: order.status,
            totalPrice: order.totalPrice,
            createdAt: order.createdAt,
            shippingAddress: order.shippingAddress,
        }))
    );

    return (
        <div className="min-h-screen py-10 px-6 md:px-16 ">
            {/* Profile Header */}
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md shadow-lg border border-rose-100 rounded-3xl p-8 mb-10">
                <h1 className="text-3xl font-semibold text-black mb-3">My Profile</h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-medium text-gray-800">{user?.name}</h2>
                        <div className="flex items-center text-gray-600 mt-1">{user?.email}</div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-rose-600 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-300"
                        >
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
                    {flattenedOrders?.length > 0 ? (
                        flattenedOrders.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleRowClick(item.orderId)}
                                className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 pb-4 last:border-none cursor-pointer"
                            >
                                <div className="flex items-center space-x-4 w-full md:w-1/2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-24 object-cover rounded-lg shadow-sm"
                                    />
                                    <div>
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <div className="text-black text-sm ">#{item?.orderId}</div>
                                        <div className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                            {new Date(item.createdAt).toLocaleDateString()}{" "}
                                            <Clock size={14} /> {new Date(item.createdAt).toLocaleTimeString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 md:mt-0 flex items-center justify-between w-full md:w-1/3">
                                    <div className="text-right md:text-center">
                                        <p className="text-gray-700 font-semibold">₹{item.totalPrice}</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        {getStatusIcon(item.status)}
                                        <span
                                            className={`font-medium text-sm ${item.status === "Delivered"
                                                    ? "text-green-600"
                                                    : item.status === "Shipped"
                                                        ? "text-blue-600"
                                                        : item.status === "Cancelled"
                                                            ? "text-red-600"
                                                            : "text-gray-500"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="mt-3 bg-rose-50 p-3 rounded-xl">
                                        <p className="text-gray-700 text-sm">
                                            {item.shippingAddress ? `${item.shippingAddress.city}` : "NA"}
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
