import axios from 'axios';
import { useEffect, useState } from 'react';
import { domain } from '../store';
import toast from 'react-hot-toast';

export default function OutSidePage() {
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    let url = domain + '/api/orders';
    
    axios
      .get(url, {
        params: {
          populate: {
            order_items: { populate: '*' },
          },
          filters: {
            order_status: { $in: ['Under Process', 'Ready'] },
          },
        },
      })
      .then((res) => {
        setOrders(res.data.data);
      });
  };

  const updateOrder = (id) => {
    let url = domain + `/api/orders/${id}`;
    let dataToUpdate = {
      data: { order_status: 'Delivered' },
    };

    axios.put(url, dataToUpdate).then(() => {
      toast.success('Order has been delivered');
      getOrders();
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="w-full h-dvh overflow-auto flex flex-col items-center py-4">
      <h1 className="w-full text-center">Outside Resturant</h1>
      <div className="container w-full grid grid-cols-2 gap-4 items-start">
        <div className="grid grid-cols-1 gap-3">
          <h1>Under Process Orders</h1>
          {orders.length == 0 && <h1>No Orders In Row</h1>}

          {orders.map(
            (el) =>
              el.order_status == 'Under Process' && (
                <div key={el.documentId} className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">Total</h2>
                      <span className="text-xl">${el.total}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      {el.order_items.map((item) => (
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>
                            {item.qty} - {item.item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="grid grid-cols-1 gap-3">
          <h1>Ready Orders</h1>
          {orders.length == 0 && <h1>No Orders In Row</h1>}

          {orders.map(
            (el) =>
              el.order_status == 'Ready' && (
                <div key={el.documentId} className="card  bg-base-100 shadow-sm">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">Total</h2>
                      <span className="text-xl">${el.total}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      {el.order_items.map((item) => (
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>
                            {item.qty} - {item.item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block" onClick={() => updateOrder(el.documentId)}>
                        Order Deleivered
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
