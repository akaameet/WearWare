import React from "react";
import { useNavigate } from "react-router-dom";

const ordersData = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/60",
    quantity: 2,
    status: "Delivered",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    image: "https://via.placeholder.com/60",
    quantity: 1,
    status: "Processing",
  },
];

const Orders = () => {
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      console.log("Canceled order:", id);
    }
  };
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/member/orders/${id}`)
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-2">My Orders</h2>
      <p className="text-sm text-gray-500 mb-6">Total {ordersData.length}</p>

      {ordersData.length === 0 ? (
        <>
          <div className="text-center text-gray-600 py-10">
            <p className="mb-4">
              You recently have no orders.
              <br />
              Browse through our categories for inspiration and purchase something you like.
            </p>
          </div>

          {/* Recommendation Sections */}
          {/* <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">NEW ARRIVALS</h3>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">TRENDING NOW</h3>
            <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-500">
              <div className="border rounded p-4">Product A</div>
              <div className="border rounded p-4">Product B</div>
            </div>
          </div> */}
        </>
      ) : (
        <>
          {/* Header Row */}
          <div className="grid grid-cols-12 font-semibold text-gray-700 border-b pb-2 mb-3 text-sm">
            <div className="col-span-1">S.N.</div>
            <div className="col-span-4">Item</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-3 text-center">Status</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Orders Table */}
          {ordersData.map((order, index) => (
            <div
              key={order.id}
              className="grid grid-cols-12 items-center py-3 border-b text-sm"
            >
              <div className="col-span-1">{index + 1}</div>
              <div className="col-span-4 flex items-center gap-3">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <span>{order.name}</span>
              </div>
              <div className="col-span-2 text-center">{order.quantity}</div>
              <div className="col-span-3 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="col-span-2 flex justify-center gap-2">
                <button
                  onClick={() => handleView(order.id)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View
                </button>
                {order.status !== "Delivered" && (
                  <button
                    onClick={() => handleCancel(order.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
