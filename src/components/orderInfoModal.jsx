import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function OrderDetailsModal({
  isModalOpen,
  closeModal,
  selectedOrder,
  refresh
}) {
  const [status, setStatus] = useState(selectedOrder?.status);
  if (!isModalOpen || !selectedOrder) return null;

  return (
    <div className="fixed left-0 top-0 w-full h-screen bg-[#00000050] z-[100] flex justify-center items-center">
      <div className="w-[600px] max-h-[80vh] overflow-y-auto bg-primary rounded-xl shadow-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-secondary mb-4">
          Order Details
        </h2>

        {/* Basic Info */}
        <div className="space-y-2 text-secondary">
          <p><span className="font-semibold">Order ID:</span> {selectedOrder.orderId}</p>
          <p><span className="font-semibold">Customer:</span> {selectedOrder.customerName}</p>
          <p><span className="font-semibold">Email:</span> {selectedOrder.email}</p>
          <p><span className="font-semibold">Phone:</span> {selectedOrder.phone}</p>
          <p><span className="font-semibold">Address:</span> {selectedOrder.address}</p>

          <p>
            <span className="font-semibold">Status:</span>
            <span className="ml-2 px-2 py-1 bg-accent text-white rounded">
              {selectedOrder.status}
            </span>
          </p>

          <p><span className="font-semibold">Total:</span> Rs. {selectedOrder.total}</p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {new Date(selectedOrder.date).toLocaleString()}
          </p>
        </div>

        {/* Items */}
        <h3 className="text-lg font-semibold text-secondary mt-6 mb-3">
          Items
        </h3>

        <div className="space-y-4">
          {selectedOrder.items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-3 rounded-lg shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1 text-secondary">
                <p className="font-semibold">{item.name}</p>
                <p>Product ID: {item.productId}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-4">
          <label className="block text-secondary font-semibold mb-1">
            Order Status
          </label>
          <select
            defaultValue={selectedOrder.status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white text-secondary border border-secondary focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer">
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="refunded">Refunded</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={()=>{
              const token = localStorage.getItem("token");
              axios.put(
                `${import.meta.env.VITE_API_URL}/api/orders/status/${selectedOrder.orderId}`,
                {status : status},
                {headers : {Authorization: `Bearer ${token}`}}
              )
              .then(()=>{
                toast.success("Order status updated");
                closeModal();
                refresh();
              });
            }}
            disabled={status== selectedOrder.status}
            className="bg-accent text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>

      </div>
    </div>
  );
}
