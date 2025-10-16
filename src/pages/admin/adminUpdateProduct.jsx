import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import toast from "react-hot-toast";
import axios from "axios";

export default function UpdateProductPage() {
    const location = useLocation();
    const [productId, setProductId] = useState(location.state.productId);
    const [name, setName] = useState(location.state.name);
    const [altNames, setAltNames] = useState(location.state.altNames.join(","));
    const [description, setDescription] = useState(location.state.description);
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState(location.state.price);
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [category, setCategory] = useState(location.state.category);
    const [stock, setStock] = useState(location.state.stock);
    const navigate = useNavigate();

    async function updateProduct() {
        const token = localStorage.getItem("token");
        if (token == null) {
            navigate("/login");
            return;
        }

        const promises = []
        for (let i = 0; i < images.length; i++) {
            promises[i] = mediaUpload(images[i])
        }

        try {
            let urls = await Promise.all(promises);

            if(urls.length == 0){
                urls = location.state.images;
            }

            const alternativeNames = altNames.split(",");

            const product = {
                productId: productId,
                name: name,
                altNames: alternativeNames,
                description: description,
                images: urls,
                price: price,
                labelledPrice: labelledPrice,
                category: category,
                stock: stock
            }

            await axios.put(import.meta.env.VITE_API_URL + "/api/products/"+productId, product, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            toast.success("Product updated successfully");
            navigate("/admin/products");

        } catch {
            toast.error("An error occurred");
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[var(--color-primary)] mt-20 mb-20 py-10">
            <div className="w-[700px] bg-white rounded-2xl shadow-2xl  p-8 flex flex-col gap-5">
                <h2 className="text-2xl font-semibold text-[var(--color-secondary)] text-center mb-4">
                    Update Product
                </h2>

                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Product ID
                        </label>
                        <input
                            disabled
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            placeholder="Enter Product ID"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Product Name"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Alternate Names
                        </label>
                        <input
                            value={altNames}
                            onChange={(e) => setAltNames(e.target.value)}
                            placeholder="Enter alternate names (comma separated)"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write a short description"
                            rows="3"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all resize-none"
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Product Images
                        </label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => setImages(e.target.files)}
                            className="border border-gray-300 rounded-lg px-3 py-2 cursor-pointer  focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0.00"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Labelled Price
                        </label>
                        <input
                            type="number"
                            value={labelledPrice}
                            onChange={(e) => setLabelledPrice(e.target.value)}
                            placeholder="0.00"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        >
                            <option value="cream">Cream</option>
                            <option value="lotion">Lotion</option>
                            <option value="serum">Serum</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Stock Quantity
                        </label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            placeholder="0"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[var(--color-accent)] transition-all"
                        />
                    </div>
                </div>

                <div className="flex justify-end items-center gap-2">
                    <button onClick={() => {
                        navigate("/admin/products")
                    }} className=" bg-red-300 h-[40px] w-[100px] rounded-full text-md font-medium flex justify-center items-center text-secondary  hover:border-red-500 hover:border-[2px]">Cancel</button>
                    <button onClick={updateProduct} className="bg-orange-300 h-[40px] w-[100px] rounded-full text-md font-medium text-secondary flex justify-center items-center hover:border-accent hover:border-[2px]">Submit</button>
                </div>

            </div>
        </div>
    );
}
