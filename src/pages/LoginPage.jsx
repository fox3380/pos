import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function LoginPage() {
  const navigate = useNavigate();

  const intialValues = { email: '', password: '' };

  const loginSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });
  
  const handleLogin = (values) => {
    let data = { identifier: values.email, password: values.password };
  
    let domain = 'https://pos.skyready.online/api/';
    let endPoint = 'auth/local';
    let url = domain + endPoint;
  
    axios
      .post(url, data)
      .then((res) => {
        let jwt = res.data.jwt;
        localStorage.setItem('token', jwt);
  
        let user = res.data.user;
        if (user.system_role == 'Admin') {
          navigate('/admin');
        } else if (user.system_role == 'Cashier') {
          navigate('/cashier');
        } else if (user.system_role == 'Restaurant') {
          navigate('/inside');
        }
      })
      .catch((err) => {
        toast.error('Wrong email or password');
      });
  
    console.log(data);
  };

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center bg-gradient-to-br from-emerald-50/40 via-white to-orange-50/40 p-4">
      <Formik onSubmit={handleLogin} initialValues={intialValues} validationSchema={loginSchema}>
        <Form className="w-full max-w-sm p-8 rounded-2xl shadow-xl bg-white flex flex-col gap-5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 rotate-6 flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold -rotate-6">G</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">Staff Access</h1>
            <p className="text-sm text-gray-500">Welcome back, enter your credentials</p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-emerald-600 tracking-widest">STAFF ID</label>

            <div className="relative">
              <Field
                name="email"
                placeholder="Enter ID"
                className="w-full px-4 py-3 pr-10 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder-gray-400"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <ErrorMessage name="email" className="text-red-500 text-xs" component={'p'} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-emerald-600 tracking-widest">PIN CODE</label>

            <div className="relative">
              <Field
                name="password"
                type="password"
                placeholder="••••"
                className="w-full px-4 py-3 pr-10 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder-gray-400 tracking-widest"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.1 0 2-.9 2-2V7a2 2 0 10-4 0v2c0 1.1.9 2 2 2zm6 0h-1V7a5 5 0 10-10 0v4H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2z"
                />
              </svg>
            </div>

            <ErrorMessage name="password" className="text-red-500 text-xs" component={'p'} />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-md transition"
          >
            Sign In
          </button>

          <Link to="/forget" className="text-center text-sm text-gray-500 hover:text-emerald-600 transition">
            Forgot PIN? Reset here
          </Link>
        </Form>
      </Formik>

      <p className="mt-6 text-xs text-emerald-600 tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
        SYSTEM SECURE & LIVE
      </p>
    </div>
  );
}
