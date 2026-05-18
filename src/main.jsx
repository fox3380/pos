import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);

// 1- Define
// عند اضافة منتج موجود مسبقاً في ال Cart لا يتم عملية تعديل كمية هذا المنتج
// 2- Reasoning
// ان الكميات لا يتم تعيدلها لأن الكمية معلومة غير موجودة في المنتج اللي بيتضاف الي ال Cart
// Object ناقص ليه Property
// امتي الكمية تتغير 
// لو المنتج بنفسه داخل الكارت لازم اعدل الكمية 
// ولو مش موجود
// 3- Solution
