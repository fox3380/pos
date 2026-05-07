import { Link, NavLink } from 'react-router-dom';

export default function SideMenu() {
  const itemClass = ({ isActive }) =>
    `w-11 h-14 rounded-2xl flex flex-col items-center justify-center gap-1 text-[8px] font-bold transition ${
      isActive
        ? 'bg-emerald-50 text-emerald-500'
        : 'text-slate-300 hover:bg-slate-50 hover:text-emerald-500'
    }`;

  return (
    <aside className="w-[58px] h-dvh border-r border-slate-100 bg-white flex flex-col items-center justify-between py-5">
      <div className="flex flex-col items-center gap-6">
        <Link
          to="/admin/menu"
          className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-100"
        >
          <span className="text-lg font-black">G</span>
        </Link>

        <nav className="flex flex-col items-center gap-3">
          <NavLink to="/admin/menu" className={itemClass}>
            <span className="text-base leading-none">⌂</span>
            <span>FOOD</span>
          </NavLink>

          <NavLink to="/admin/drinks" className={itemClass}>
            <span className="text-base leading-none">♙</span>
            <span>DRINKS</span>
          </NavLink>

          <NavLink to="/admin/sweets" className={itemClass}>
            <span className="text-base leading-none">♨</span>
            <span>DESSERT</span>
          </NavLink>

          <NavLink to="/admin/sales" className={itemClass}>
            <span className="text-base leading-none">◌</span>
            <span>SIDES</span>
          </NavLink>
        </nav>
      </div>

      <Link to="/login" className="text-slate-300 text-xl hover:text-emerald-500 transition">
        ↪
      </Link>
    </aside>
  );
}
