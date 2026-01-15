import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    async function register() {
        if (password !== confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/api/users/", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            });

            toast.success("Registration successful! Please login.");
            navigate("/login");

        } catch (e) {
            console.error("Login failed:",e)
            toast.error("Login failed.Please check your credentials");
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/bg5.jpg')] bg-cover bg-center flex items-center justify-center">
            {/* Login Card */}
            <div className="w-[400px] bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl flex flex-col gap-6 border border-secondary/10">
                {/* Logo */}
                <div className="flex justify-center mb-2">
                    <img src="/logo.png" alt="CBC Logo" className="w-24" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-secondary">
                    SignUp to CBC
                </h2>
                <p className="text-sm text-center text-secondary/70">
                    Crystal Beauty Clear – Elegance Awaits
                </p>

                {/* Inputs */}
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />
                <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="firstName"
                    placeholder="First Name"
                    autoComplete="given-name"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="lastName"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full h-12 px-4 rounded-xl border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
                />

                {/* register button */}
                <button
                    onClick={register}
                    className="w-full h-12 bg-accent text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#e6731f] transition-all"
                >
                    Register
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-2">
                    <div className="h-px flex-1 bg-secondary/20"></div>
                    <span className="text-xs text-secondary/60">or</span>
                    <div className="h-px flex-1 bg-secondary/20"></div>
                </div>

                {/* Signup */}
                <p className="text-sm text-center text-secondary/70">
                    Already have an account?{" "}
                    <Link to="/login" className="text-accent hover:underline font-medium">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
