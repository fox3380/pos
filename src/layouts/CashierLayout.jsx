import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CashierSidebar from '../components/cashier/CashierSidebar';
import CashierTopBar from '../components/cashier/CashierTopBar';
import OrderPanel from '../components/cashier/OrderPanel';
import axios from 'axios';
import { domain, useCart, useModal } from '../store/index';
import Modal from '../components/Modal';

export default function CashierLayout() {
  const { modalIndex } = useModal();

  const navigate = useNavigate();
  const { cart } = useCart();

  const subtotal = 59;
  const tax = 2.95;
  const total = 61.95;

  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token) {
      let endPoint = '/api/users/me';
      let url = domain + endPoint;
      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          if (res.data.system_role == 'Restaurant') {
            alert('اطلع بره يلا ديه المكان بتاع ال Admin or Cashier');
            navigate('/login');
          } else {
            sessionStorage.setItem('User', JSON.stringify(res.data));
          }
        })
        .catch(() => {
          localStorage.clear();
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full h-dvh overflow-hidden bg-white text-slate-900 flex flex-col lg:flex-row overflow-x-hidden">
      <CashierSidebar />

      <main className="flex-1 min-w-0 flex flex-col">
        <CashierTopBar />
        <Outlet />
      </main>

      <OrderPanel orderItems={cart} subtotal={subtotal} tax={tax} total={total} />

      {modalIndex && <Modal />}
    </div>
  );
}

// Zustand
// ContextAPI (Perfroramance Problems) (1.5 min ~ 3 sec)
// Redux
