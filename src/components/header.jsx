import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaFacebookF, FaPinterestP, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Search } from "lucide-react";


import UserData from "./userData";
import UserDataMobile from "./userDataMobile";

export default function Header() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <header className="w-full h-[150px]">
            <div className="w-full h-[40px] flex p-1 bg-accent">
                <div className="h-full w-full flex items-center gap-[20px] px-[10px]">
                    <FaFacebookF className="w-[20px] h-[20px] text-white" />
                    <FaPinterestP className="w-[20px] h-[20px] text-white" />
                    <FaInstagram className="w-[20px] h-[20px] text-white" />
                    <FaWhatsapp className="w-[20px] h-[20px] text-white" />
                    <FaTiktok className="w-[20px] h-[20px] text-white" />
                    <FaYoutube className="w-[20px] h-[20px] text-white" />
                    <FaThreads className="w-[20px] h-[20px] text-white" />
                </div>
                <div className="h-full w-full text-white font-semibold flex items-center justify-end gap-[20px] px-[40px]">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="w-full h-[70px] flex bg-white">
                <div className="w-[30%] h-full flex items-center p-1 relative">
                    <img src="/logo.png" className="flex w-[270px] h-full absolute left-0 object-cover" />
                </div>
                <div className="w-[40%] h-full flex items-center px-1">
                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 text-sm border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />

                    {/* Button */}
                    <button
                        className="px-5 py-2 text-sm font-medium text-white bg-accent rounded-r-lg hover:bg-accent/90 transition"
                    >
                        Search
                    </button>
                </div>
                <div className="w-[30%] h-full flex items-center justify-center text-secondary">
                    <div className="w-[200px] h-full flex items-center justify-end px-6">
                        <CiUser className="text-3xl" />
                        <div className="w-[100px] h-[40px]">
                            <div className="w-[100px] h-[20px] font-semibold flex items-center justify-center">
                                <Link>My Account</Link>
                            </div>
                            <span className="w-[100px] h-[20px] text-[12px] px-2 flex items-center justify-start">Log In</span>
                        </div>
                    </div>
                    <Link className="h-full flex items-center justify-center gap-1">
                        <IoCartOutline className="text-3xl"/>
                        <span className="font-semibold">cart (0)</span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[40px] bg-gray-200">

            </div>
        </header>

        // <header className="w-full h-[100px] bg-accent text-white px-[40px]">
        //     <div className="h-full w-full flex relative bg-red-500">
        //         <img src="/CBC_logo.png" className="bg-fuchsia-400 hidden lg:flex h-full absolute w-[170px] left-0 object-cover" />
        //         <div className="lg:hidden w-full flex justify-center items-center relative">
        //             <MdMenu className="absolute left-0 text-3xl" onClick={() => setIsSideBarOpen(true)} />
        //             <img src="/CBC_logo.png" className="h-full w-[170px] object-cover" />
        //         </div>
        //         {
        //             isSideBarOpen &&
        //             <div className="fixed top-0 left-0 w-full h-screen bg-[#00000080] text-secondary z-100">
        //                 <div className="w-[300px] bg-primary h-full flex flex-col">
        //                     <div className="lg:hidden h-[100px] w-full bg-accent relative flex justify-center items-center">
        //                         <MdMenu className="absolute left-2 text-white text-3xl" onClick={() => setIsSideBarOpen(false)} />
        //                         <img src="/CBC_logo.png" className="h-full w-[170px] object-cover" />
        //                     </div>

        //                     <a href="/" className="p-4 border-b border-secondary/10">Home</a>
        //                     <a href="/products" className="p-4 border-b border-secondary/10">Products</a>
        //                     <a href="/about" className="p-4 border-b border-secondary/10">About</a>
        //                     <a href="/contact" className="p-4 border-b border-secondary/10">Contact</a>
        //                     <a href="/cart" className="p-4 border-b border-secondary/10">Cart</a>
        //                     <div className="lg:hidden flex w-[200px] absolute bottom-[260px] text-3xl justify-center items-center">
        //                         <UserDataMobile />
        //                     </div>
        //                 </div>
        //             </div>
        //         }
        //         <div className="bg-amber-300 hidden h-full lg:flex justify-center items-center w-full text-lg gap-[20px]">
        //             <Link to="/">Home</Link>
        //             <Link to="/products">Products</Link>
        //             <Link to="/about">About</Link>
        //             <Link to="/contact">Contact</Link>
        //         </div>
        //         <div className="bg-blue-500 h-full hidden lg:flex w-[200px] absolute right-[100px] top-0 text-3xl justify-center items-center">
        //             <UserData />
        //         </div>
        //         <Link to="/cart" className="bg-green-400 h-full absolute text-3xl right-0 hidden lg:flex justify-center items-center">
        //             <BsCart3 />
        //         </Link>
        //     </div>
        // </header>
    )
}