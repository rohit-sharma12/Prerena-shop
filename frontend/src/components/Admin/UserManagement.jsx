import { useState } from "react";
import { Search, Edit2, Trash2, Eye, UserPlus } from "lucide-react";

const UserManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState("");

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Rohit Sharma",
            email: "rohit@example.com",
            role: "Customer",

        },
        {
            id: 2,
            name: "Priya Patel",
            email: "priya@example.com",
            role: "Customer",

        },
        {
            id: 3,
            name: "Amit Verma",
            email: "amit@example.com",
            role: "Admin",

        },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Customer",
    });


    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreateUser = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            setMessage("❌ Please fill all required fields!");
            return;
        }
        console.log(formData);

        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            role: formData.role,
        };

        setUsers([...users, newUser]);
        setFormData({ name: "", email: "", password: "", role: "Customer" });
        setMessage("✅ User created successfully!");

        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
                <div className="relative mt-4 sm:mt-0">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full sm:w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Create User Form */}
            <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <UserPlus size={22} className="text-blue-600" />
                    <h2 className="text-lg font-semibold text-gray-800">Create New User</h2>
                </div>

                {message && (
                    <p
                        className={`mb-4 text-sm font-medium ${message.includes("✅") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}

                <form
                    onSubmit={handleCreateUser}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Create User
                        </button>
                    </div>
                </form>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                            <th className="py-3 px-4 border-b">Name</th>
                            <th className="py-3 px-4 border-b">Email</th>
                            <th className="py-3 px-4 border-b">Role</th>
                            <th className="py-3 px-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr
                                    key={user.id}
                                    className="hover:bg-gray-50 transition-all border-b"
                                >
                                    <td className="py-3 px-4">{user.name}</td>
                                    <td className="py-3 px-4">{user.email}</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === "Admin"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>

                                    <td className="py-3 px-4 text-center space-x-3">
                                        <button
                                            onClick={() => handleDelete(user.id)}
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
                                    colSpan="5"
                                    className="text-center py-6 text-gray-500 italic"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
