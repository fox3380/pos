import { useEffect, useState } from 'react';
import { useCart, useModal } from '../store';

export default function Modal() {
  const { setModalIndex } = useModal();
  const { cart } = useCart();
  const [total, setTotal] = useState();
  const [remian, setRemian] = useState(0);

  const [given, setGiven] = useState(0);

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
        <button className="w-full">Save Order</button>
        <p className='bg-red-200'>Remain : {given == 0 ? 0 : given - total}</p>
      </div>
    </div>
  );
}

//
