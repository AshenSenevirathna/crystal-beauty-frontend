import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

import UserData from "./userData";
import UserDataMobile from "./userDataMobile";

export default function Header() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <header className="w-full h-[100px] bg-accent text-white px-[40px]">
            <div className="h-full w-full flex relative">
                <img src="/CBC_logo.png" className="hidden lg:flex h-full absolute w-[170px] left-0 object-cover" />
                <div className="lg:hidden w-full flex justify-center items-center relative">
                    <MdMenu className="absolute left-0 text-3xl" onClick={() => setIsSideBarOpen(true)} />
                    <img src="/CBC_logo.png" className="h-full w-[170px] object-cover" />
                </div>
                {
                    isSideBarOpen &&
                    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000080] text-secondary z-100">
                        <div className="w-[300px] bg-primary h-full flex flex-col">
                            <div className="lg:hidden h-[100px] w-full bg-accent relative flex justify-center items-center">
                                <MdMenu className="absolute left-2 text-white text-3xl" onClick={() => setIsSideBarOpen(false)} />
                                <img src="/CBC_logo.png" className="h-full w-[170px] object-cover" />
                            </div>

                            <a href="/" className="p-4 border-b border-secondary/10">Home</a>
                            <a href="/products" className="p-4 border-b border-secondary/10">Products</a>
                            <a href="/about" className="p-4 border-b border-secondary/10">About</a>
                            <a href="/contact" className="p-4 border-b border-secondary/10">Contact</a>
                            <a href="/cart" className="p-4 border-b border-secondary/10">Cart</a>
                            <div className="lg:hidden flex w-[200px] absolute bottom-[260px] text-3xl justify-center items-center">
                                <UserDataMobile />
                            </div>
                        </div>
                    </div>
                }
                <div className="hidden h-full lg:flex justify-center items-center w-full text-lg gap-[20px]">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="h-full hidden lg:flex w-[200px] absolute right-[100px] top-0 text-3xl justify-center items-center">
                    <UserData />
                </div>
                <Link to="/cart" className="h-full absolute text-3xl right-0 hidden lg:flex justify-center items-center">
                    <BsCart3 />
                </Link>
            </div>
        </header>
    )
}