import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    ShoppingBag,
    Users,
    Package,
    Store,
    LogOut,
} from "lucide-react";

const AdminSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { name: "Products", path: "/admin/products", icon: ShoppingBag },
        { name: "Orders", path: "/admin/orders", icon: Package },
        { name: "Users", path: "/admin/users", icon: Users },
        { name: "Shops", path: "/", icon: Store },
    ];

    const handleLogout = () => {
        navigate('/');
    }
    return (
        <div className="h-full flex flex-col justify-between bg-gray-900 text-white">
            <div className="p-6 border-b border-gray-800">
                <Link to="/admin" className="text-2xl font-bold tracking-wide">
                    <span className="text-blue-400">Ethnic Center</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 
                ${isActive
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <button onClick={handleLogout} className="flex items-center gap-3 w-full text-gray-300 hover:text-red-500 transition-all">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
