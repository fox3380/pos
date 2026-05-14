import { Outlet, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

import { useEffect } from 'react';
import axios from 'axios';
import { domain } from '../store';

export default function AdminLayout() {
  // محتاج اكتب كود js Logic بس خايف يعمل مشكلة في اول Render
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      // مبروك حضرتك عامل Login وينفع تخش المسارات ديه كلها
      let endPoint = '/api/users/me';
      let url = domain + endPoint;

      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          if (res.data.system_role != 'Admin') {
            alert('اطلع بره يلا ديه المكان بتاع ال Admin');
            navigate('/login');
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
    <div className="w-full h-dvh overflow-hidden flex bg-white text-slate-900">
      <SideMenu />

      <div className="flex-1 h-dvh overflow-hidden flex">
        <main className="flex-1 h-full overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
