import { useEffect, useState } from 'react';
import { domain, useCart, useModal } from '../store';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Modal() {
  const { setModalIndex } = useModal();
  const { cart, setCart } = useCart();
  const [total, setTotal] = useState();
  const [remian, setRemian] = useState(0);

  const [given, setGiven] = useState(0);

  const saveOrder = () => {
    let user = JSON.parse(sessionStorage.getItem('User'));

    let dataToPost = {
      data: {
        users_permissions_user: user.documentId,
        total: total,
        order_status: 'Under Process',
      },
    };
    let url = domain + '/api/orders';
    // Save The Order
    axios.post(url, dataToPost).then((res) => {
      let orderId = res.data.data.documentId;

      
      cart.forEach(async (item) => {
        let url2 = domain + '/api/order-items';
        let dataToPost = {
          data: {
            order: orderId,
            item: item.documentId,
            qty: item.qty,
          },
        };
        await axios.post(url2, dataToPost);
      });

      toast.success('Order Saved');
      setCart([]);
      setModalIndex(false);
    });
  };

  useEffect(() => {
    let sub = 0;
    cart.forEach((el) => {
      sub = sub + el.price * el.qty;
    });
    let newTax = 0.14 * sub;
    setTotal(newTax + sub);
  }, [cart]);

  return (
    <div className="w-full h-dvh bg-black/40 fixed top-0 left-0 z-50 flex justify-center items-center" onClick={() => setModalIndex(false)}>
      <div onClick={(event) => event.stopPropagation()} className="bg-white rounded-2xl w-[400px] shadow border flex flex-col gap-4 p-4">
        <h1>Checkout</h1>
        <h1>Total : {total}</h1>
        <input onChange={(event) => setGiven(event.target.value)} className="input w-full" placeholder="Enter Customer Amount" />
        <button onClick={saveOrder} className="btn btn-success w-full" disabled={given < total ? true : false}>
          Save Order
        </button>
        <p className="bg-red-200">Remain : {given == 0 ? 0 : given - total}</p>
      </div>
    </div>
  );
}

//
