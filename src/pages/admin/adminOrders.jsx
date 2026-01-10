import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader.jsx";
import OrderDetailsModal from "../../components/orderInfoModal.jsx";

export default function AdminOrdersPage() {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            const token = localStorage.getItem("token");
            if (token == null) {
                navigate("/login");
                return;
            }
            axios.get(import.meta.env.VITE_API_URL + "/api/orders", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
                .then((response) => {
                    //console.log(response.data);
                    setOrders(response.data);
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    //console.log(products);
    return (
        <div className="h-full w-full p-[10px]">
            <OrderDetailsModal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                selectedOrder={selectedOrder}
                refresh={()=>setIsLoading(true)}
            />



            <div className="bg-red-500">
                <button>{orders.length + " items"}</button>
            </div>

            {isLoading ? <Loader /> : <table className="border border-gray-700 w-full text-center rounded-lg overflow-hidden">
                <thead >
                    <tr className="bg-accent">
                        <th>Order ID</th>
                        <th>Number of Items</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item) => {
                        return (
                            <tr key={item.orderId} onClick={() => {
                                setSelectedOrder(item);
                                setIsModalOpen(true);
                            }}>

                                <td>{item.orderId}</td>
                                <td>{item.items.length}items</td>
                                <td>{item.customerName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{`LKR ${item.total}`}</td>
                                <td>{item.status}</td>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                            </tr>
                        );
                    })}
                    {orders.length === 0 && (
                        <tr>
                            <td className="px-4 py-12 text-center text-secondary/60" colSpan={7}>
                                No products to display
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>}
        </div>


    );
}

