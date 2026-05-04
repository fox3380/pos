import { Outlet, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { useEffect } from 'react';
import axios from 'axios';

export default function AdminLayout() {
  // محتاج اكتب كود js Logic بس خايف يعمل مشكلة في اول  Render
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      // مبروك حضرتك عامل Login وينفع تخش المسارات ديه كلها
      let domain = 'https://pos.skyready.online/api/';
      let endPoint = 'users/me';
      let url = domain + endPoint;

      axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          if (res.data.user.syste_role != 'Admin') {
            alert('اطلع بره يلا ديه المكان بتاع ال Admin');
          }

        })
        .catch((err) => {
          alert('انت جاي تستظرف يلا');
          localStorage.clear();
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, []);
  return (
    <div className="w-full h-dvh overflow-hidden flex">
      <SideMenu />
      <div className="w-100 grow h-dvh bg-green-500">
        {/* اظهر محتوي الصفحة هنا */}
        <Outlet />
      </div>
    </div>
  );
}
