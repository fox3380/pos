import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgetPage from './pages/ForgetPage';
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import { Toaster } from 'react-hot-toast';
import CashierLayout from './layouts/CashierLayout';
import CategoryItemsPage from './pages/CategoryItemsPage';
import InsidePage from './pages/InsidePage';
import OutSidePage from './pages/OutSidePage';

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

          <Route path="/cashier" element={<CashierLayout />}>
            <Route index element={<h1>Cahsier Dashboard</h1>} />
            <Route path=":categoryId" element={<CategoryItemsPage />} />
          </Route>

          <Route path="/resturant">
            <Route path="inside" element={<InsidePage />} />
            <Route path="outside" element={<OutSidePage />} />
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
// Static
// Nested
// Protected
// Dynamic Route
// Reporting
// 1- اجمالي المبيعات اليومية
// 500 order filter created_at
// 