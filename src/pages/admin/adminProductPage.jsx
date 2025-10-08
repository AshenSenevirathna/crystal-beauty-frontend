//import axios from "axios"
import { useState } from "react";

const sampleData = [
    {
        productId: "P001",
        name: "Organic Jackfruit Chips",
        altNames: ["Jackfruit Crisps", "Dried Jackfruit Slices"],
        description: "Crispy and naturally sweet jackfruit chips made from fresh, organic jackfruit slices.",
        images: [
            "https://example.com/images/jackfruit-chips-1.jpg",
            "https://example.com/images/jackfruit-chips-2.jpg"
        ],
        price: 450,
        labelledPrice: 500,
        category: "Snacks"
    },
    {
        productId: "P002",
        name: "Pure Palm Oil 1L",
        altNames: ["Palm Cooking Oil", "Natural Palm Oil Bottle"],
        description: "Cold-pressed pure palm oil perfect for healthy cooking and frying.",
        images: [
            "https://example.com/images/palm-oil-1l-1.jpg",
            "https://example.com/images/palm-oil-1l-2.jpg"
        ],
        price: 1200,
        labelledPrice: 1300,
        category: "Edible Oils"
    },
    {
        productId: "P003",
        name: "Jackfruit Seed Flour 500g",
        altNames: ["Jackseed Flour", "Gluten-Free Jackfruit Powder"],
        description: "Nutrient-rich gluten-free flour made from dried jackfruit seeds, ideal for baking and smoothies.",
        images: [
            "https://example.com/images/jackfruit-seed-flour-1.jpg"
        ],
        price: 800,
        labelledPrice: 900,
        category: "Health Foods"
    },
    {
        productId: "P004",
        name: "Palm Oil Soap Bar",
        altNames: ["Natural Palm Soap", "Organic Skincare Soap"],
        description: "Handcrafted soap bar made with natural palm oil for smooth and hydrated skin.",
        images: [
            "https://example.com/images/palm-soap-1.jpg"
        ],
        price: 350,
        labelledPrice: 400,
        category: "Personal Care"
    },
    {
        productId: "P005",
        name: "Jackfruit Pickle 250g",
        altNames: ["Spicy Jackfruit Pickle", "Jackfruit Achar"],
        description: "A traditional Sri Lankan-style spicy jackfruit pickle with a tangy and savory flavor.",
        images: [
            "https://example.com/images/jackfruit-pickle-1.jpg",
            "https://example.com/images/jackfruit-pickle-2.jpg"
        ],
        price: 600,
        labelledPrice: 650,
        category: "Condiments"
    }
];


export default function AdminProductPage() {

    const [products, setProducts] = useState(sampleData)

    // axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
    //     (response)=>{
    //         console.log(response.data);
    //     }
    // )

    //console.log(products);
    return (
        <div className="h-full w-full p-[10px]">

            <table className="border w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Labelled Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            {
                products.map(
                    (item) => {
                        return (<p className="w-full text-accent">
                            {item.name}
                        </p>)
                    }
                )
            }
        </div>
    )
}