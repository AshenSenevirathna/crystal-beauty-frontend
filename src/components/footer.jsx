import { Divide } from "lucide-react";
import { FaFacebookF, FaPinterestP, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="w-full h-[420px] bg-gray-800">
            <div className="w-full h-[120px] flex bg-white px-[100px] py-1">
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <span className="text-secondary font-semibold text-3xl mb-3 uppercase">Newsletter</span>
                    <span className="text-center text-sm font-medium text-secondary">Stay in the loop! Get the latest updates, exclusive offers, and beauty tips straight to your inbox.</span>
                </div>
                <div className="w-full h-full flex items-center justify-center px-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-[70%] h-[50px] px-4 py-2 text-sm border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button className="w-[30%] h-[50px] px-4 py-2 text-sm font-medium text-white bg-accent rounded-r-lg hover:bg-accent/90 transition focus:outline-none focus:ring-2 focus:ring-accent">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="w-full h-[240px] px-20">
                <div className="w-full h-full flex">
                    <div className="w-full h-full flex flex-col items-center p-4 text-white/50">
                        <img src="/footer_logo.png" className="w-[280px] h-[70px] object-cover" />
                        <span className="text-center font-semibold mt-5">Buy Original & Premium Beauty Products from Crystal Beauty Cosmatic</span>
                        <div className="w-full flex items-center justify-center gap-4 py-6 mt-2">
                            <FaFacebookF className="text-[20px]" />
                            <FaPinterestP className="text-[20px]" />
                            <FaInstagram className="text-[20px]" />
                            <FaWhatsapp className="text-[20px]" />
                            <FaTiktok className="text-[20px]" />
                            <FaYoutube className="text-[20px]" />
                            <FaThreads className="text-[20px]" />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center py-5 text-white/50">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl uppercase">Quick Links</span>
                            <Link className="text-[16px] font-semibold mt-4 mb-1">Home</Link>
                            <Link className="text-[16px] font-semibold mb-1">Products</Link>
                            <Link className="text-[16px] font-semibold mb-1">About Us</Link>
                            <Link className="text-[16px] font-semibold mb-1">Orders</Link>
                            <Link className="text-[16px] font-semibold">Cart</Link>
                        </div>

                    </div>
                    <div className="w-full h-full flex flex-col items-center py-5 text-white/50">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl uppercase">Product Categories</span>
                            <Link className="text-[16px] font-semibold mt-4 mb-1">Makeup</Link>
                            <Link className="text-[16px] font-semibold mb-1">Skin Care</Link>
                            <Link className="text-[16px] font-semibold mb-1">Hair Care</Link>
                            <Link className="text-[16px] font-semibold mb-1">Sun & Tan</Link>
                            <Link className="text-[16px] font-semibold">Toiletries</Link>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col items-center py-5 text-white/50">
                        <div className="flex flex-col">
                            <span className="font-semibold text-2xl uppercase">Contact Us</span>
                            <Link className="flex items-center text-[16px] font-semibold mt-4 mb-1 gap-2"><FaLocationDot /> No. 45/2, Galle Road,</Link>
                            <Link className="text-[16px] font-semibold mb-1">Colombo 03</Link>
                            <Link className="flex items-center text-[16px] font-semibold mb-1 gap-2"><FaPhone /> +94 11 234 5678</Link>
                            <Link className="flex items-center text-[16px] font-semibold mb-1 gap-2"><MdEmail /> sales@crystalbeautycosmetic.com</Link>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-[2px] mt-2 bg-accent" />
                <div className="w-full h-[50px] text-white/50  flex items-center justify-center">
                    <span> © {new Date().getFullYear()} Crystal Beauty Cosmetics. All rights reserved.</span>
                </div>
            </div>
        
            
        </div>
    );
}
