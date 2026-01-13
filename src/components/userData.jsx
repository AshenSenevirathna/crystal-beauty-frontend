// import axios from "axios";
// import { useEffect, useState } from "react";
// //import { Loader } from "../components/loader.jsx";

// export default function UserData(){

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//         useEffect(() => {
//             const token = localStorage.getItem("token");
//             if (token != null) {
//                 axios.get(import.meta.env.VITE_API_URL + "/api/users/me", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }).then((res) => {
//                     setUser(res.data);
//                     setLoading(false);
//                 }).catch(() => {
//                     localStorage.removeItem("token");
//                     setUser(null);
//                     setLoading(false);
//                 });
//             }else{
//                 setLoading(false);
//             }
//         }, []);

//     return(
//         <div className="flex justify-center items-center">
//             {
//                 loading && <div className="w-[30px] h-[30px] border-[3px] border-white border-b-transparent rounded-full animate-spin"></div>
//             }
//             {
//                 user && <div className="h-full w-full flex justify-center items-center">
//                     <img src={user.image} className="w-[40px] h-[40px] rounded-full border-[2px] border-primary"/>
//                     <span className="ml-2">{user.firstName}</span>
//                     <select className="ml-2 bg-accent max-w-[20px] text-white p-1 rounded">
//                         <option></option>
//                         <option>Account Settings</option>
//                         <option>Logout</option>
//                         <option>Orders</option>
//                     </select>
//                 </div>
//             }
//             {
//                 (!loading && user == null) && <a href="/login" className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition">login</a>
//             }
//         </div>
//     );
// }

import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function UserData() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            axios
                .get(import.meta.env.VITE_API_URL + "/api/users/me", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setUser(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-center items-center">
            {/* Loading */}
            {loading && (
                <div className="w-[30px] h-[30px] border-[3px] border-white border-b-transparent rounded-full animate-spin"></div>
            )}

            {/* User Logged In */}
            {!loading && user && (
                <div
                    className="relative flex items-center gap-2 cursor-pointer"
                    ref={dropdownRef}
                >
                    <img
                        src={user.image}
                        className="w-[40px] h-[40px] rounded-full border-2 border-primary object-cover"
                    />
                    <span className="text-white font-medium">{user.firstName}</span>

                    <button
                        onClick={() => setOpen(!open)}
                        className="ml-1 text-white text-sm"
                    >
                        ▼
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 top-12 bg-secondary text-white rounded-lg shadow-lg w-48 overflow-hidden">
                            <a
                                href="/account"
                                className="block px-4 py-2 hover:bg-accent transition"
                            >
                                Account Settings
                            </a>
                            <a
                                href="/orders"
                                className="block px-4 py-2 hover:bg-accent transition"
                            >
                                Orders
                            </a>
                            <button 
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 hover:bg-red-500 transition"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Not Logged In */}
            {!loading && !user && (
                <a
                    href="/login"
                    className="bg-accent text-white px-5 py-2 rounded-full hover:opacity-90 transition shadow-md"
                >
                    Login
                </a>
            )}
        </div>
    );
}
