import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center justify-between p-4 bg-gray-900 text-white z-30">
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
          <h1 className="text-xl font-medium">Admin Dashboard</h1>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm z-20 md:hidden"
          onClick={toggleSidebar}
        >
        </div>
      )}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        <AdminSidebar />
      </div>
      
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
