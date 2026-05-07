import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CashierSidebar from '../components/cashier/CashierSidebar';
import CashierTopBar from '../components/cashier/CashierTopBar';
import OrderPanel from '../components/cashier/OrderPanel';

export default function CashierPage() {
  const initialOrderItems = [
    {
      id: 1,
      name: 'Classic Wagyu Burger',
      desc: 'Organic beef, cheddar, truffle mayo',
      price: 18.5,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Truffle Margherita',
      desc: 'Buffalo mozzarella, fresh basil',
      price: 22,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700',
      quantity: 1,
    },
  ];

  const [orderItems, setOrderItems] = useState(initialOrderItems);

  const increaseQuantity = (id) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrderItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const subtotal = 59;
  const tax = 2.95;
  const total = 61.95;

  return (
    <div className="w-full min-h-dvh bg-white text-slate-900 flex flex-col lg:flex-row overflow-x-hidden">
      <CashierSidebar />

      <main className="flex-1 min-w-0 flex flex-col">
        <CashierTopBar />
        <Outlet />
      </main>

      <OrderPanel
        orderItems={orderItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearOrder={clearOrder}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />
    </div>
  );
}