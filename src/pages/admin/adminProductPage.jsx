import axios from "axios"
import { useEffect, useState } from "react";

export default function AdminProductPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/api/products").then(
            (response) => {
                console.log(response.data);
                setProducts(response.data);
            });
    }, []);

    //console.log(products);
    return (
        <div className="h-full w-full p-[10px]">

            <table className="border w-full text-center">
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
                    {products.map((item) => {
                        return (
                            <tr key={item.productId}>
                                <td>
                                    <img src={item.images[0]} className="w-16 h-16 object-cover" />
                                </td>
                                <td>{item.productId}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.labelledPrice}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}