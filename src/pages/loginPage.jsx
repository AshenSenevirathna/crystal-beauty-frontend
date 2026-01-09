// import axios from "axios";
// import { useState } from "react"

// export default function LoginPage() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function login() {
//         const response = await axios.post(import.meta.env.VITE_API_URL+ "/api/users/login",{
//             email : email,
//             password : password
//         })
//         console.log(response.data);
//     }

//     return (
//         <div className="w-full h-full bg-[url('/bg5.jpg')] bg-cover bg-center flex">
//             <div className="w-[50%] h-full"></div>
//             <div className="w-[50%] h-full flex justify-center items-center">
//                 <div className="w-[500px] h-[500px] backdrop-blur-lg shadow-2xl rounded-[20px] flex flex-col justify-center items-center gap-[20px]">

//                     <input onChange={(e) => {
//                         setEmail(e.target.value);
//                     }}
//                         className="w-[400px] h-[40px] bg-white" />

//                     <input onChange={(e) => {
//                         setPassword(e.target.value);
//                     }}
//                         className="w-[400px] h-[40px] bg-white" />

//                     <button onClick={login} className="bg-accent w-[400px] h-[40px]">Login</button>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import axios from "axios";
// import { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function login() {
//     const response = await axios.post(
//       import.meta.env.VITE_API_URL + "/api/users/login",
//       {
//         email: email,
//         password: password,
//       }
//     );
//     console.log(response.data);
//   }

//   return (
//     <div className="w-full h-screen bg-[url('/bg5.jpg')] bg-cover bg-center flex">
//       {/* Left Side (Brand/Promo) */}
//       <div className="w-1/2 h-full flex flex-col justify-center items-center bg-secondary/70 backdrop-blur-md text-primary p-10">
//         <img src="/logo.png" alt="CBC Logo" className="w-40 mb-6 drop-shadow-lg" />
//         <h1 className="text-4xl font-bold tracking-wide mb-4 text-accent">
//           Crystal Beauty Clear
//         </h1>
//         <p className="text-lg text-primary/90 text-center max-w-md leading-relaxed">
//           Glow with confidence. CBC brings you premium cosmetics to enhance your
//           natural beauty.
//         </p>
//       </div>

//       {/* Right Side (Login Form) */}
//       <div className="w-1/2 h-full flex justify-center items-center">
//         <div className="w-[420px] p-10 backdrop-blur-xl bg-white/20 rounded-2xl shadow-2xl flex flex-col gap-6">
//           <h2 className="text-2xl font-semibold text-secondary text-center">
//             Welcome Back ✨
//           </h2>
//           <p className="text-center text-sm text-secondary/80">
//             Please login to continue
//           </p>

//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Email Address"
//             className="w-full h-12 px-4 rounded-lg border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all"
//           />

//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Password"
//             className="w-full h-12 px-4 rounded-lg border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all"
//           />

//           <button
//             onClick={login}
//             className="w-full h-12 bg-accent text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-[#e6731f] transition-all"
//           >
//             Login
//           </button>

//           <p className="text-sm text-center text-secondary/70 mt-4">
//             Don’t have an account?{" "}
//             <a href="/signup" className="text-accent hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import axios from "axios";
// import { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);

//   async function login() {
//     const response = await axios.post(
//       import.meta.env.VITE_API_URL + "/api/users/login",
//       {
//         email,
//         password,
//         remember,
//       }
//     );
//     console.log(response.data);
//   }

//   return (
//     <div className="w-full h-screen bg-[url('/bg5.jpg')] bg-cover bg-center flex items-center justify-center">
//       {/* Login Card */}
//       <div className="w-[420px] p-10 bg-white rounded-2xl shadow-2xl flex flex-col gap-6 border border-secondary/10">
//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <img src="/logo.png" alt="CBC Logo" className="w-24" />
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center text-secondary">
//           Welcome Back
//         </h2>
//         <p className="text-sm text-center text-secondary/70">
//           Login to your CBC account
//         </p>

//         {/* Inputs */}
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Email Address"
//           className="w-full h-12 px-4 rounded-lg border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//           className="w-full h-12 px-4 rounded-lg border border-secondary/20 focus:border-accent focus:ring-2 focus:ring-accent/40 outline-none transition-all"
//         />

//         {/* Remember + Forgot */}
//         <div className="flex items-center justify-between text-sm">
//           <label className="flex items-center gap-2 text-secondary/80 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={remember}
//               onChange={() => setRemember(!remember)}
//               className="accent-accent w-4 h-4"
//             />
//             Remember me
//           </label>
//           <a
//             href="/forgot-password"
//             className="text-accent hover:underline font-medium"
//           >
//             Forgot password?
//           </a>
//         </div>

//         {/* Login button */}
//         <button
//           onClick={login}
//           className="w-full h-12 bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#e6731f] transition-all"
//         >
//           Login
//         </button>

//         {/* Signup */}
//         <p className="text-sm text-center text-secondary/70">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-accent hover:underline font-medium">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    async function login() {
        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL + "/api/users/login", {
                email,
                password
            });
            localStorage.setItem("token",response.data.token);
            const user = response.data.user;
            toast.success("Login Successful");
            if (user.role == "admin") {
                navigate("/admin");
            } else {
                navigate("/")
            }
            //console.log(response.data);
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

                {/* Divider */}
                <div className="flex items-center gap-3 my-2">
                    <div className="h-px flex-1 bg-secondary/20"></div>
                    <span className="text-xs text-secondary/60">or</span>
                    <div className="h-px flex-1 bg-secondary/20"></div>
                </div>

                {/* Signup */}
                <p className="text-sm text-center text-secondary/70">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-accent hover:underline font-medium">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
