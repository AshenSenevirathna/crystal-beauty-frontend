import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom"
import { Loader } from "../components/loader";
import ImageSlider from "../components/imageSlider";
import { addToCart, loadCart } from "../utils/cart";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa";


export default function ProductOverview() {

    const params = useParams();
    const [status, setStatus] = useState("loading");
    const [product, setProduct] = useState(null);
    const discountPercentage = (labelledPrice, sellingPrice) => {
        return Math.round(
            ((labelledPrice - sellingPrice) / labelledPrice) * 100
        );
    };

    // Example
    //discountPercentage(5000, 4000); // 20


    useEffect(
        () => {
            axios.get(import.meta.env.VITE_API_URL + "/api/products/" + params.id).then(
                (res) => {
                    setProduct(res.data);
                    setStatus("success");
                }
            ).catch(
                () => {
                    toast.error("Failed to fetch product details");
                    setStatus("error");
                }
            )
        }
        , []);

    return (
        <div className="w-full lg:min-h-[calc(100vh-100px)] text-secondary bg-primary">
            {status == "loading" && <Loader />}
            {status == "success" && (
                <div className="w-full flex flex-col lg:flex-row p-10 bg-red-500">
                    <h1 className="text-2xl font-bold text-center lg:hidden">{product.name}</h1>
                    <div className="bg-blue-400 w-full lg:w-[50%] h-full flex justify-center items-center">
                        <ImageSlider images={product.images} />
                    </div>
                    <div className="bg-yellow-500 w-full lg:w-[50%] h-full pt-10 pr-10">
                        <div className="bg-white w-full h-full flex flex-col">
                            {
                                product.labelledPrice > product.price &&
                                (
                                    <div className="absolute text-white text-[12px] px-2 py-1 font-bold rounded uppercase tracking-wider bg-accent">
                                        {discountPercentage(product.labelledPrice, product.price)}% off
                                    </div>
                                )
                            }

                            {/* <span className="relative mt-6">{product.productId}</span> */}
                            <h1 className="relative text-[28px] font-bold mt-8">{product.name}
                                {
                                    product.altNames.map(
                                        (name, index) => {
                                            return (
                                                <span key={index} className="font-bold text-secondary">{" | " + name}</span>
                                            )
                                        }
                                    )
                                }
                            </h1>
                            <div className="bg-white flex items-center gap-4 py-1 text-secondary">
                                <div className="h-full">
                                    <p className="font-semibold text-[18px]">Brand Name</p>
                                </div>
                                <div className="h-full">
                                    <p className="text-[12px]">{product.productId}</p>
                                </div>
                            </div>
                            {
                                product.labelledPrice > product.price ?
                                    <div className="flex gap-3 items-center pt-2 text-[16px]">
                                        <p className="text-secondary font-semibold line-through">LKR {product.labelledPrice.toFixed(2)}</p>
                                        <p className="text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
                                    </div> :
                                    <p className="text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
                            }
                            <hr className="mt-4 text-secondary" />
                            <div className="flex text-secondary gap-2 mt-3">
                                <div className="flex items-center justify-center font-semibold gap-2 border border-secondary px-2">
                                    <MdOutlineLocalShipping className="text-[32px] text-secondary" />
                                    Fast Shipping</div>
                                <div className="flex items-center justify-center font-semibold gap-2 border border-secondary px-2">
                                    <RiSecurePaymentFill className="text-[32px] text-secondary" />
                                    Secure Payment
                                </div>
                            </div>
                            <div className="flex flex-col mt-2 font-semibold">
                                <span className="text-secondary">Availability</span>
                                <p className="w-fit rounded px-2 py-[2px] text-white text-[14px] bg-accent">In Stock</p>
                            </div>
                            <div className="flex flex-col mt-2 font-semibold">
                                <span className="text-secondary">Quantity</span>
                                <div className="bg-red-400 mt-1 flex w-fit border border-secondary">
                                    <div className="w-8 h-8 flex items-center justify-center text-[14px] bg-amber-200"><FaMinus /></div>
                                    <div className="w-8 h-8 flex items-center justify-center text-[18px] bg-pink-200">1</div>
                                    <div className="w-8 h-8 flex items-center justify-center text-[14px]  bg-amber-200"><FaPlus /></div>
                                </div>
                            </div>
                            <p className="mt-[30px] text-justify">{product.description}</p>
                            <p>Category : {product.category}</p>
                            <p>Category : {discountPercentage(product.labelledPrice, product.price)}</p>
                            {
                                product.labelledPrice > product.price ?
                                    <div className="flex gap-3 items-center text-[10px]">
                                        <p className="text-secondary font-semibold line-through">LKR {product.labelledPrice.toFixed(2)}</p>
                                        <p className="text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
                                    </div> :
                                    <p className="text-lg text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
                            }
                            {/* <div className="w-full h-[40px] flex gap-4 mt-[60px]">
                                <button className="w-[50%] h-full bg-accent text-white font-semibold hover:bg-accent/80"
                                    onClick={() => {
                                        addToCart(product, 1);
                                        toast.success("Added to cart");
                                    }}>Add to Cart</button>
                                <Link to="/checkout" state={[{
                                    image: product.images[0],
                                    productId: product.productId,
                                    name: product.name,
                                    price: product.price,
                                    labelledPrice: product.labelledPrice,
                                    quantity: 1
                                }]} className="w-[50%] flex justify-center items-center text-center h- full border border-accent text-accent font-semibold hover:bg-accent hover:text-white"
                                >Buy Now</Link>
                            </div> */}
                        </div>

                    </div>
                </div>
            )}
            {status == "error" && (
                <h1 className="text-red-500">Failed to load product details</h1>
            )}
            <div className="w-full h-[100px] bg-green-600"></div>
        </div>

        // <div className="w-full lg:min-h-[calc(100vh-100px)] text-secondary bg-primary">
        //     {status == "loading" && <Loader />}
        //     {status == "success" && (
        //         <div className="w-full flex flex-col lg:flex-row p-10 bg-red-500">
        //             <h1 className="text-2xl font-bold text-center lg:hidden">{product.name}</h1>
        //             <div className="bg-blue-400 w-full lg:w-[50%] h-full flex justify-center items-center">
        //                 <ImageSlider images={product.images} />
        //             </div>
        //             <div className="bg-yellow-500 w-full lg:w-[50%] h-full flex flex-col items-center gap-4 p-10 bg-primary">
        //                 <span className="">{product.productId}</span>
        //                 <h1 className="text-2xl font-bold text-center">{product.name}
        //                     {
        //                         product.altNames.map(
        //                             (name, index) => {
        //                                 return (
        //                                     <span key={index} className="font-normal text-secondary">{" | " + name}</span>
        //                                 )
        //                             }
        //                         )
        //                     }
        //                 </h1>
        //                 <p className="mt-[30px] text-justify">{product.description}</p>
        //                 <p>Category : {product.category}</p>
        //                 <p>Category : {discountPercentage(product.labelledPrice,product.price)}</p>
        //                 {
        //                     product.labelledPrice > product.price ?
        //                         <div className="flex gap-3 items-center">
        //                             <p className="text-lg text-secondary font-semibold line-through">LKR {product.labelledPrice.toFixed(2)}</p>
        //                             <p className="text-lg text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
        //                         </div> :
        //                         <p className="text-lg text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
        //                 }
        //                 <div className="w-full h-[40px] flex gap-4 mt-[60px]">
        //                     <button className="w-[50%] h-full bg-accent text-white font-semibold hover:bg-accent/80"
        //                         onClick={() => {
        //                             addToCart(product, 1);
        //                             toast.success("Added to cart");
        //                         }}>Add to Cart</button>
        //                     <Link to="/checkout" state={[{
        //                         image: product.images[0],
        //                         productId: product.productId,
        //                         name: product.name,
        //                         price: product.price,
        //                         labelledPrice: product.labelledPrice,
        //                         quantity: 1
        //                     }]} className="w-[50%] flex justify-center items-center text-center h- full border border-accent text-accent font-semibold hover:bg-accent hover:text-white"
        //                     >Buy Now</Link>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        //     {status == "error" && (
        //         <h1 className="text-red-500">Failed to load product details</h1>
        //     )}
        // </div>


    );
}