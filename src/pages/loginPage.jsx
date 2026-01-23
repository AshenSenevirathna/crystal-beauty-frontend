
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin({
        onSuccess: (response) => {
            axios.post(import.meta.env.VITE_API_URL + "/api/users/google-login", {
                token: response.access_token
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                const user = res.data.user;
                if (user.role == "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }).catch((err) => {
                console.error("Google login failed:", err);
                toast.error("Google login failed. Please try again.");
            });
        }
    });

    async function login() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/api/users/login", {
                email,
                password
            });
            localStorage.setItem("token", response.data.token);
            const user = response.data.user;
            toast.success("Login Successful");
            if (user.role == "admin") {
                navigate("/admin");
            } else {
                navigate("/")
            }
            //console.log(response.data);
        } catch (e) {
            console.error("Login failed:", e)
            toast.error("Login failed.Please check your credentials");
        }
    }

    return (

        // <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6">
        //     {/* Modern Glassy Header */}
        //     <div className="mb-10 text-center">
        //         <div className="inline-block p-3 bg-white rounded-2xl shadow-sm mb-4">
        //             <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
        //                 💎
        //             </div>
        //         </div>
        //         <h1 className="text-4xl font-black text-secondary tracking-tight">
        //             CRYSTAL <span className="text-accent">BEAUTY</span>
        //         </h1>
        //         <div className="h-1 w-12 bg-accent mx-auto mt-2 rounded-full"></div>
        //     </div>

        //     {/* Main Card Container */}
        //     <div className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-orange-900/10 border border-white">

        //         {/* Visual/Marketing Side */}
        //         <div className="bg-secondary md:w-1/2 p-12 text-white flex flex-col justify-between relative overflow-hidden">
        //             {/* Abstract Design Elements */}
        //             <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        //             <div className="absolute bottom-[-5%] left-[-5%] w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>

        //             <div className="relative z-10">
        //                 <span className="text-accent font-bold tracking-widest text-xs uppercase">Est. 2026</span>
        //                 <h2 className="text-4xl font-bold mt-4 leading-tight">
        //                     Enhance Your <br />
        //                     <span className="italic font-serif text-primary/90">Natural Glow.</span>
        //                 </h2>
        //                 <p className="text-gray-400 mt-6 leading-relaxed max-w-sm">
        //                     Join our community of beauty enthusiasts and get access to member-only drops and personalized skincare routines.
        //                 </p>
        //             </div>

        //             <div className="relative z-10 pt-12">
        //                 <div className="flex -space-x-3">
        //                     {[1, 2, 3, 4].map((i) => (
        //                         <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-600 flex items-center justify-center text-[10px]">
        //                             👤
        //                         </div>
        //                     ))}
        //                     <div className="flex items-center ml-4 text-xs text-gray-400 font-medium">
        //                         +2k members joined this week
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Form Side */}
        //         <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
        //             <div className="w-full max-w-sm mx-auto">
        //                 <div className="mb-8">
        //                     <h2 className="text-2xl font-bold text-secondary">Welcome back</h2>
        //                     <p className="text-gray-500 text-sm mt-1">Please enter your details to sign in.</p>
        //                 </div>

        //                 <form className="space-y-5">
        //                     <div className="space-y-2">
        //                         <label className="text-sm font-bold text-secondary/80 ml-1">Email Address</label>
        //                         <input
        //                             type="email"
        //                             placeholder="hello@crystalbeauty.com"
        //                             className="w-full bg-primary/30 border border-gray-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
        //                         />
        //                     </div>

        //                     <div className="space-y-2">
        //                         <div className="flex justify-between items-center px-1">
        //                             <label className="text-sm font-bold text-secondary/80">Password</label>
        //                             <button type="button" className="text-xs font-semibold text-accent hover:underline">Forgot password?</button>
        //                         </div>
        //                         <input
        //                             type="password"
        //                             placeholder="••••••••"
        //                             className="w-full bg-primary/30 border border-gray-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
        //                         />
        //                     </div>

        //                     {/* <button className="w-full bg-secondary text-white font-bold py-4 rounded-2xl mt-4 hover:bg-accent transition-colors shadow-lg shadow-secondary/20 active:scale-[0.98]">
        //                         Sign In
        //                     </button> */}
        //                     {/* Login Button */}
        //                     <button className="w-full bg-secondary text-white font-bold py-4 rounded-2xl mt-4 hover:bg-accent transition-colors shadow-lg shadow-secondary/20 active:scale-[0.98]">
        //                         Sign In
        //                     </button>

        //                     {/* Divider */}
        //                     <div className="relative my-8 text-center">
        //                         <div className="absolute inset-0 flex items-center">
        //                             <div className="w-full border-t border-gray-100"></div>
        //                         </div>
        //                         <span className="relative px-4 bg-white text-xs font-bold text-gray-400 uppercase tracking-widest">
        //                             or continue with
        //                         </span>
        //                     </div>

        //                     {/* Google Button */}
        //                     <button
        //                         type="button"
        //                         className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-secondary font-bold py-3.5 rounded-2xl hover:bg-primary/30 hover:border-accent/30 transition-all active:scale-[0.98]"
        //                     >
        //                         <svg className="w-5 h-5" viewBox="0 0 24 24">
        //                             <path
        //                                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        //                                 fill="#4285F4"
        //                             />
        //                             <path
        //                                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        //                                 fill="#34A853"
        //                             />
        //                             <path
        //                                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        //                                 fill="#FBBC05"
        //                             />
        //                             <path
        //                                 d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        //                                 fill="#EA4335"
        //                             />
        //                         </svg>
        //                         <span>Google</span>
        //                     </button>
        //                 </form>

        //                 <div className="mt-10 pt-8 border-t border-gray-100 text-center">
        //                     <p className="text-sm text-gray-500">
        //                         New to Crystal Beauty?
        //                         <button className="ml-2 font-bold text-accent hover:text-secondary transition-colors">Create account</button>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>


        // <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        //     {/* Top Logo / Branding */}
        //     <div className="mb-8 text-center">
        //         <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-200 mb-4 text-white">
        //             <span className="text-3xl">💎</span>
        //         </div>
        //         <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
        //             Crystal <span className="text-emerald-600">Beauty</span>
        //         </h1>
        //         <p className="text-slate-500 mt-1">Premium Cosmetics & Skincare</p>
        //     </div>

        //     {/* Main Login Card */}
        //     <div className="bg-white w-full max-w-4xl shadow-2xl shadow-slate-200 rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-100">

        //         {/* Description Section (Left on Desktop, Top on Mobile) */}
        //         <div className="bg-emerald-600 md:w-5/12 p-10 flex flex-col justify-center text-white relative overflow-hidden">
        //             {/* Decorative background circle */}
        //             <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500 rounded-full opacity-50"></div>

        //             <div className="relative z-10">
        //                 <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
        //                 <p className="text-emerald-50 opacity-90 leading-relaxed mb-8">
        //                     Log in to explore exclusive products, manage your orders, and enjoy a personalized shopping experience.
        //                 </p>
        //                 <div className="space-y-4">
        //                     <div className="flex items-center gap-3">
        //                         <span className="bg-emerald-500/50 p-1 rounded-full text-xs">✨</span>
        //                         <span className="text-sm font-medium">Curated Beauty Kits</span>
        //                     </div>
        //                     <div className="flex items-center gap-3">
        //                         <span className="bg-emerald-500/50 p-1 rounded-full text-xs">✨</span>
        //                         <span className="text-sm font-medium">Exclusive Member Offers</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Login Form (Right side) */}
        //         <div className="md:w-7/12 p-10 lg:p-14 bg-white">
        //             <div className="max-w-sm mx-auto">
        //                 <h2 className="text-2xl font-bold text-slate-800 mb-2">User Login</h2>
        //                 <p className="text-slate-500 mb-8 text-sm">Please enter your details to continue.</p>

        //                 <form className="space-y-5">
        //                     <div>
        //                         <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
        //                         <input
        //                             type="email"
        //                             placeholder="name@company.com"
        //                             className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400"
        //                         />
        //                     </div>

        //                     <div>
        //                         <div className="flex justify-between mb-2">
        //                             <label className="text-sm font-semibold text-slate-700">Password</label>
        //                             <a href="#" className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">Forgot?</a>
        //                         </div>
        //                         <input
        //                             type="password"
        //                             placeholder="••••••••"
        //                             className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-slate-400"
        //                         />
        //                     </div>

        //                     <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]">
        //                         Sign In
        //                     </button>
        //                 </form>

        //                 <div className="mt-8 text-center">
        //                     <p className="text-sm text-slate-500">
        //                         Don’t have an account?
        //                         <button className="ml-1 font-bold text-emerald-600 hover:underline">Create account</button>
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        //     {/* Simple Footer Text */}
        //     <p className="mt-8 text-slate-400 text-sm">© 2026 Crystal Beauty Cosmetics</p>
        // </div>

        // <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center">

        //     {/* Top banner (can be logo / branding later) */}
        //     <div className="bg-green-400 w-[800px] h-[100px] rounded-xl mb-6 flex items-center justify-center">
        //         <h1 className="text-white text-2xl font-bold">
        //             Crystal Beauty Cosmetics
        //         </h1>
        //     </div>

        //     {/* Main login section */}
        //     <div className="bg-amber-800 w-[1100px] h-[300px] rounded-2xl flex items-center justify-center gap-6 p-6">

        //         {/* Login Form */}
        //         <div className="bg-white w-[500px] h-full rounded-xl p-6 flex flex-col justify-center">
        //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        //                 User Login
        //             </h2>

        //             <input
        //                 type="email"
        //                 placeholder="Email address"
        //                 className="border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
        //             />

        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        //             />

        //             <button className="bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
        //                 Login
        //             </button>

        //             <p className="text-sm text-gray-500 mt-3 text-center">
        //                 Don’t have an account? <span className="text-primary cursor-pointer">Sign up</span>
        //             </p>
        //         </div>

        //         {/* Description Section */}
        //         <div className="bg-accent w-[500px] h-full rounded-xl p-6 flex flex-col justify-center">
        //             <h2 className="text-2xl font-bold text-dark mb-3">
        //                 Welcome to Crystal Beauty 💎
        //             </h2>

        //             <p className="text-gray-700 leading-relaxed">
        //                 Discover premium cosmetics crafted to enhance your natural beauty.
        //                 Log in to explore exclusive products, manage your orders, and enjoy
        //                 a personalized shopping experience with Crystal Beauty Cosmetics.
        //             </p>

        //             <p className="mt-4 text-sm text-gray-600">
        //                 ✨ Beauty • Elegance • Confidence
        //             </p>
        //         </div>

        //     </div>
        // </div>

        // <div className="bg-white w-full h-full flex flex-col items-center justify-center">
        //     <div className="bg-green-400 w-[800px] h-[100px]"></div>
        //     <div className="bg-amber-800 w-[1100px] h-[200px] flex items-center justify-center">
        //         <div className="bg-white w-[500px] h-[100px]"></div>
        //         <div className="bg-accent w-[500px] h-[100px]"></div>
        //     </div>


        // </div>

        <div className=" bg-red-800 w-full h-screen bg-[url('/bg5.jpg')] bg-cover bg-center flex items-center justify-center">
            {/* Login Card */}
            <div className="w-[400px] bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl flex flex-col gap-6 border border-secondary/10">
                {/* Logo */}
                <div className="flex justify-center mb-2">
                    <img src="/logo.png" alt="CBC Logo" className="w-24" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-secondary">
                    Login to CBC
                </h2>
                <p className="text-sm text-center text-secondary/70">
                    Crystal Beauty Clear – Elegance Awaits
                </p>

                {/* Inputs */}
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-secondary/80 cursor-pointer">
                        <input
                            type="checkbox"
                            //checked={remember}
                            //onChange={() => setRemember(!remember)}
                            className="accent-accent w-4 h-4"
                        />
                        Remember me
                    </label>
                    <a
                        href="/forgot-password"
                        className="text-accent hover:underline font-medium"
                    >
                        Forgot password?
                    </a>
                </div>

                {/* Login button */}
                <button
                    onClick={login}
                    className="w-full h-12 bg-accent text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#e6731f] transition-all"
                >
                    Login
                </button>
                <button
                    onClick={googleLogin}
                    className="w-full h-12 bg-accent text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#e6731f] transition-all"
                >
                    Google Login
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-2">
                    <div className="h-px flex-1 bg-secondary/20"></div>
                    <span className="text-xs text-secondary/60">or</span>
                    <div className="h-px flex-1 bg-secondary/20"></div>
                </div>

                {/* Signup */}
                <p className="text-sm text-center text-secondary/70">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-accent hover:underline font-medium">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
