import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t mt-16">
            {/* 🌐 Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-indigo-600 tracking-tight"
                    >
                        Prerna
                        <span className="text-gray-800 font-semibold">
                            {" "}
                            Matching Center
                        </span>
                    </Link>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        Empowering fashion lovers with the finest traditional and modern
                        ethnic collections. Trusted by 10k+ customers worldwide.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-5">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 transition"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 transition"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 transition"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600 transition"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li>
                            <Link to="/about" className="hover:text-indigo-600 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className="hover:text-indigo-600 transition">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-indigo-600 transition">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-indigo-600 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gray-900 font-semibold mb-4">Shop</h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li>
                            <Link to="#" className="hover:text-indigo-600 transition">
                                Saris
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-indigo-600 transition">
                                Suits
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-indigo-600 transition">
                                Bottom
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-indigo-600 transition">
                                Collections
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gray-900 font-semibold mb-4">Stay Updated</h4>
                    <p className="text-gray-600 text-sm mb-4">
                        Subscribe to get exclusive offers, updates, and style inspiration.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* 🔹 Bottom Footer Bar */}
            <div className="border-t py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Prerna Matching Center — All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;
