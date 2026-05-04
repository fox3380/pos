import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="w-50 h-dvh overflow-hidden bg-gray-950 text-white flex flex-col gap-3">
        <Link to="/admin">Dashbaord</Link>
        <Link to="/admin/menu">Menu</Link>
        <Link to="/admin/staff">Staff Management</Link>
        <Link to="/admin/sales">Sales Report</Link>
    </div>
  )
}
