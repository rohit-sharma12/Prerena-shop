import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slice/authSlice"
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slice/cartSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);


    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    useEffect(() => {
        if (user) {
            if (cart?.products.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user })).then(() => {
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                })
            } else {
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    };

    return (
        <div className="flex h-screen">
            <div className="flex flex-col justify-center items-center w-full px-6">
                <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-rose-100">
                    <h1 className="text-4xl font-semibold text-black text-center mb-3 tracking-wide">
                        Prerna Ethnic
                    </h1>
                    <p className="text-gray-500 text-center mb-8 text-sm">
                        Welcome back! Log in to explore our latest saree and suit collections.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500 hover:text-rose-500 transition cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-700 cursor-pointer text-white py-3 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Don’t have an account?{" "}
                        <Link to={`/signup?redidrect=${encodeURIComponent(redirect)}`} className="text-red-500 font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;
