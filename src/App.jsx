import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgetPage from './pages/ForgetPage';
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import CashierPage from './pages/CashierPage';

import CashierFoodPage from './pages/cashier/CashierFoodPage';
import CashierDrinksPage from './pages/cashier/CashierDrinksPage';
import CashierSweetsPage from './pages/cashier/CashierSweetsPage';
import CashierSidesPage from './pages/cashier/CashierSidesPage';

import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="w-full min-h-dvh overflow-auto" data-theme="light">
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forget" element={<ForgetPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>

          <Route path="/cashier" element={<CashierPage />}>
            <Route index element={<CashierFoodPage />} />
            <Route path="food" element={<CashierFoodPage />} />
            <Route path="drinks" element={<CashierDrinksPage />} />
            <Route path="sweets" element={<CashierSweetsPage />} />
            <Route path="sides" element={<CashierSidesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// 4 Layouts
// Login - Forget Password

// Admin Panel (Dashboard - menu - drinks - sweets - sales)

// Cahsier Panel (food - dessert - drinks - sides)

// Resturant (inside - outside)

