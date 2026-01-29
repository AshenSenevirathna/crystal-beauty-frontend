import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios.get(import.meta.env.VITE_API_URL + "/api/products")
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching products:", error);
                    setIsLoading(false);
                    toast.error("Failed to load products");
                });
        }
    }, [isLoading]);

    return (
        <div className="w-full min-h-screen bg-primary flex flex-col">
            <section className="relative w-full h-[70vh] flex items-center justify-center">

                {/* Background image / gradient */}
                {/* <div
                    className="absolute inset-0 bg-gradient-to-r from-pink-100 via-rose-200 to-pink-300"
                ></div> */}
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/product_hero.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>


                {/* Overlay (optional for readability) */}
                <div className="absolute inset-0 bg-white/30"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Crystal Beauty Cosmetics
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Discover beauty crafted for every skin type
                    </p>

                    {/* <button
                        onClick={() =>
                            document.getElementById("products").scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
                    >
                        Explore Our Products
                    </button> */}
                </div>

            </section>
            {/* <div className="flex flex-col items-center justify-center w-full h-full mb-2 gap-2 pt-8 text-secondary">
                <span className="font-bold text-3xl">All Products</span>
                <span className="text-[16px]">"Discover beauty crafted for every skin type"</span>
            </div> */}
            <main className="flex-grow flex flex-col md:flex-row max-w-[1400px] mx-auto w-full p-4 gap-6">

                {/* Sidebar / Filters Section */}
                <aside className="w-full md:w-[250px] shrink-0">
                    <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-secondary font-bold text-xl mb-4">Filters</h2>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse"></div>
                            <div className="h-4 w-5/6 bg-slate-100 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid Section */}
                <section className="flex-grow bg-white rounded-2xl">
                    <div className="mb-2 flex justify-between items-center px-4 mt-2">
                        <h1 className="text-2xl font-bold text-secondary">Our Collection</h1>
                        <span className="text-sm text-slate-500 font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                            {products.length} Products Found
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-center gap-2 rounded-2xl">
                        {isLoading ? (
                            <div className="w-full h-64 flex items-center justify-center text-secondary/50 italic">
                                Loading latest products...
                            </div>
                        ) : (
                            products.map((item) => (
                                <ProductCard key={item.productId} product={item} />
                            ))

                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


// <div className="w-full min-h-[calc(100vh-100px)] bg-primary">
//     {
//         isLoading? <Loader/> :
//         <div className="w-full h-full flex flex-row flex-wrap justify-center items-center bg-primary">
//             {
//                 products.map((item)=>{
//                     return(
//                         <ProductCard key={item.productId} product={item}/>
//                     )
//                 })
//             }
//             {
//                 products.map((item)=>{
//                     return(
//                         <ProductCard key={item.productId} product={item}/>
//                     )
//                 })
//             }
//             {
//                 products.map((item)=>{
//                     return(
//                         <ProductCard key={item.productId} product={item}/>
//                     )
//                 })
//             }
//             {
//                 products.map((item)=>{
//                     return(
//                         <ProductCard key={item.productId} product={item}/>
//                     )
//                 })
//             }
//         </div>
//     }
// </div>


//my code
// import axios from "axios";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// //import { Loader } from "../components/loader";
// import ProductCard from "../components/productCard";
// import Footer from "../components/footer";

// export function ProductPage() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         if (isLoading) {
//             axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
//                 (response) => {
//                     setProducts(response.data);
//                     setIsLoading(false);
//                 }
//             ).catch((error) => {
//                 console.error("Error fetching products:", error);
//                 setIsLoading(false);
//                 toast.error("Failed to load products");
//             });
//         }
//     }, [isLoading])

//     return (
//         <div className="w-full min-h-[calc(100vh-100px)] bg-primary">
//             <div className="w-full h-full flex bg-red-500 gap-1">
//                 <div className="w-[25%] h-[100px] bg-yellow-300"></div>
//                 <div className="w-[75%] h-full bg-green-300 flex flex-row justify-center items-center p-2 mr-4">
//                     <div className="bg-blue-300 w-full h-full flex flex-wrap items-center justify-center">
//                         {
//                             products.map((item) => {
//                                 return (
//                                     <ProductCard key={item.productId} product={item} />
//                                 )
//                             })
//                         }

//                     </div>

//                 </div>
//             </div>
//             <Footer />

//         </div>

//     )
// }