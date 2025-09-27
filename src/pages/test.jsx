// export default function TestPage() {

//     let count = 10;

//     return (
//         <div className="w-full h-full flex justify-center items-center">
//             <div className="w-[500px] h-[500px] bg-amber-100 text-white flex justify-center items-center gap-[20px]">
//                 <button onClick={() => {
//                     console.log("Decreasing...")
//                     count = count - 1;
//                 }}
//                     className="w-[100px] h-[40px] bg-accent rounded-lg">-</button>
//                 <span className="text-accent text-5xl">{count}</span>
//                 <button onClick={() => {
//                     console.log("Increasing...")
//                     count = count + 1;
//                 }}
//                     className="w-[100px] h-[40px] bg-accent rounded-lg">+</button>
//             </div>
//         </div>
//     )
// }

//---------------------LoginPage-----------------------

// export default function TestPage() {
//   return (
//     <div className="flex h-screen">
//       {/* Left Side */}
//       <div className="w-1/2 bg-pink-100 flex flex-col justify-center items-center p-10">
//         <h1 className="text-4xl font-bold text-gray-800">COSMETICS</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Discover your beauty. Log in to continue.
//         </p>
//         <div className="mt-8">
//           {/* Add product images if needed */}
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3349/3349387.png"
//             alt="Cosmetics Icon"
//             className="w-28 h-28 mx-auto"
//           />
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
//         <div className="w-full max-w-sm">
//           <h2 className="text-2xl font-semibold text-gray-800 text-center">
//             Log in to your account
//           </h2>
//           <form className="mt-6 space-y-4">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
//               />
//             </div>

//             <div className="text-right">
//               <a
//                 href="#"
//                 className="text-sm text-pink-500 hover:underline"
//               >
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-pink-500 text-white py-2 rounded-lg shadow hover:bg-pink-600 transition"
//             >
//               LOGIN
//             </button>
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-600">
//             Don’t have an account?{" "}
//             <a href="#" className="text-pink-500 hover:underline">
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


//import React from "react";

export default function TestPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-pink-100 flex flex-col justify-center items-center p-10">
        {/*<h1 className="text-4xl font-bold text-gray-800">COSMETICS</h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us and discover your inner beauty.
        </p>*/}
        <div className="mt-8">
          {/*<img
            src="https://cdn-icons-png.flaticon.com/512/3349/3349387.png"
            alt="Cosmetics Icon"
            className="w-28 h-28 mx-auto"
          />*/}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Create your account
          </h2>
          <form className="mt-6 space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your first name"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/*Last Name*/}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your last name"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg shadow hover:bg-pink-600 transition"
            >
              SIGN UP
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
