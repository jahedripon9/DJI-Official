import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

  const [status, setStatus] = useState("");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handeleUpdate = (id) => {
    fetch(`http://localhost:5000/status/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  }
    return (
        <div class="container mx-auto px-4">
            <div class='mx-auto my-14'>
            <h1 class='border-2 text-3xl font-bold'>Manage All Orders</h1>
                <table class="table-auto bg-yellow-50 ">
          <thead class='border-2'>
          <tr class="bg-blue-200 border-2">
              <th>#</th>
              <th class='border-2'>Service Title</th>
              <th class='border-2'>Event description</th>
              <th class='border-2'>Image Link</th>
              <th class='border-2'>Status</th>
              <th class='border-2'>Action</th>
            </tr>
          </thead>
          {orders?.map((product, index) => (
            <tbody>
              <tr class='border-2'>
                <td class='border-2'>{index}</td>
                <td class='border-2'>{product.name}</td>
                <td class='border-2'>{product.description}</td>
                <td class='border-2'>{product.image}</td>
                <td>
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={product.status}
                  />
                </td>
                <button className="bg-red-500 px-3 py-2 rounded">Delete</button>
                <button
                  onClick={() => handeleUpdate(product._id)}
                  className="btn bg-success p-2"
                >
                  UPDATE
                </button>
              </tr>
            </tbody>
          ))}
        </table>
            </div>
        </div>
    );
};

export default ManageOrder;