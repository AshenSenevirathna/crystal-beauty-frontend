import axios from "axios"
import { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

export default function AdminProductPage() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

            <Link to="/admin/add-product" className="fixed right-[50px] bottom-[50px] hover:text-accent text-5xl">
                <CiCirclePlus />
            </Link>

            <table className="border border-gray-700 w-full text-center rounded-lg overflow-hidden">
                <thead >
                    <tr className="bg-accent">
                        <th>Image</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Labelled Price</th>
                        <th>Category</th>
                        <th>Actions</th>
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
                                <td>LKR. {item.price}</td>
                                <td>LKR. {item.labelledPrice}</td>
                                <td>{item.category}</td>
                                <td>
                                    <div className="flex flex-row gap-[20px] justify-center items-center">
                                        <BsTrash3 className="hover:text-red-600" />
                                        <FaRegEdit className="hover:text-accent" onClick={() => {
                                            navigate("/admin/update-product", {
                                                state: item
                                            });
                                        }} />
                                    </div>
                                </td>
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

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BsTrash3 } from "react-icons/bs";
// import { FaRegEdit } from "react-icons/fa";

// export default function AdminProductPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get(import.meta.env.VITE_API_URL + "/api/products").then((response) => {
//       console.log(response.data);
//       setProducts(response.data);
//     });
//   }, []);

//   return (
//     <div className="h-full w-full p-6 bg-[var(--color-primary)]">
//       <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-[var(--color-accent)] text-white text-sm md:text-base">
//               <th className="py-3 px-4 rounded-tl-2xl">Image</th>
//               <th className="py-3 px-4">Product Id</th>
//               <th className="py-3 px-4">Product Name</th>
//               <th className="py-3 px-4">Product Price</th>
//               <th className="py-3 px-4">Labelled Price</th>
//               <th className="py-3 px-4">Category</th>
//               <th className="py-3 px-4 rounded-tr-2xl">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((item) => (
//               <tr
//                 key={item.productId}
//                 className="hover:bg-[var(--color-primary)] transition-all border-b border-gray-200"
//               >
//                 <td className="py-3 px-4 flex justify-center">
//                   <img
//                     src={item.images[0]}
//                     alt={item.name}
//                     className="w-14 h-14 object-cover rounded-lg shadow-sm"
//                   />
//                 </td>
//                 <td className="py-3 px-4 text-gray-700">{item.productId}</td>
//                 <td className="py-3 px-4 font-medium text-gray-800">{item.name}</td>
//                 <td className="py-3 px-4 text-green-700 font-semibold">
//                   ${item.price}
//                 </td>
//                 <td className="py-3 px-4 text-gray-600 line-through">
//                   ${item.labelledPrice}
//                 </td>
//                 <td className="py-3 px-4 text-gray-700">{item.category}</td>
//                 <td className="py-3 px-4">
//                   <div className="flex flex-row gap-5 justify-center items-center">
//                     <BsTrash3 className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer text-lg" />
//                     <FaRegEdit className="text-gray-500 hover:text-[var(--color-accent)] transition-colors cursor-pointer text-lg" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//             {products.length === 0 && (
//               <tr>
//                 <td colSpan="7" className="py-6 text-gray-500 text-center">
//                   No products found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
