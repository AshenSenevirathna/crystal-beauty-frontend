import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductPage } from "./productPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkout";
import HomeImageSlider from "../components/homeImageSlider";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import WelcomePage from "./welcomePage";
import Footer from "../components/footer";

export default function HomePage() {
    return (
        <div className="w-full h-full">
            <Header />

            <Routes path="/">
                <Route path="/" element={<WelcomePage/>}></Route>
                <Route path="/products" element={<ProductPage />}></Route>
                <Route path="/contact" element={<h1>Contact Us</h1>}></Route>
                <Route path="/about" element={<h1>About Us</h1>}></Route>
                <Route path="/overview/:id" element={<ProductOverview />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
            
        </div>
    )
}