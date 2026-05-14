import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { domain } from '../store';
export default function ForgetPage() {
  const navigate = useNavigate();

  const intialValues = { email: '' };

  const forgetSchema = Yup.object({
    email: Yup.string().required().email(),
  });

  const handleForget = (values) => {
    let data = { email: values.email };

    let endPoint = '/api/auth/forgot-password';
    let url = domain + endPoint;

    axios
      .post(url, data)
      .then((res) => {
        toast.success('Reset link sent! Check your email');
        navigate('/login');
      })
      .catch((err) => {
        toast.error('Email not found');
      });
    console.log(data);
  };

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center bg-gradient-to-br from-emerald-50/40 via-white to-orange-50/40 p-4">
      <Formik onSubmit={handleForget} initialValues={intialValues} validationSchema={forgetSchema}>
        <Form className="w-full max-w-sm p-8 rounded-2xl shadow-xl bg-white flex flex-col gap-5">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 rotate-6 flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold -rotate-6">G</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Reset PIN</h1>
            <p className="text-sm text-gray-500 text-center">Enter your email and we'll send you a reset link</p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-emerald-600 tracking-widest">EMAIL ADDRESS</label>
            <div className="relative">
              <Field name="email" type="email" placeholder="Enter your email" className="w-full px-4 py-3 pr-10 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700 placeholder-gray-400" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <ErrorMessage name="email" className="text-red-500 text-xs" component={'p'} />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-md transition">
            Send Reset Link
          </button>

          <Link to="/login" className="text-center text-sm text-gray-500 hover:text-emerald-600 transition flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Sign In
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
