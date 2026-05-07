import { NavLink, useLocation } from 'react-router-dom';
import { TbChefHat } from 'react-icons/tb';
import { PiBowlFood, PiCake, PiForkKnifeLight } from 'react-icons/pi';
import { RiDrinks2Line } from 'react-icons/ri';
import { LuLogOut } from 'react-icons/lu';

export default function CashierSidebar() {
  const location = useLocation();

  const navClass = ({ isActive }) =>
    `group min-w-16 lg:w-14 h-16 rounded-2xl flex flex-col items-center justify-center gap-1 transition duration-300 hover:-translate-y-1 ${
      isActive
        ? 'bg-emerald-50 text-emerald-500 shadow-md shadow-emerald-100'
        : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500'
    }`;

  return (
    <aside className="w-full lg:w-[70px] lg:h-dvh border-b lg:border-b-0 lg:border-r border-slate-100 bg-white flex lg:flex-col items-center justify-between gap-4 px-4 py-4 lg:px-0 lg:py-7 shrink-0">
      <div className="flex lg:flex-col items-center gap-4 lg:gap-10 w-full lg:w-auto">
        <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg shrink-0">
          <TbChefHat className="text-[24px]" />
        </div>

        <nav className="flex lg:flex-col items-center gap-3 lg:gap-6 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
          <NavLink
            to="/cashier/food"
            className={({ isActive }) =>
              location.pathname === '/cashier'
                ? navClass({ isActive: true })
                : navClass({ isActive })
            }
          >
            <PiBowlFood className="text-[22px] transition duration-300 group-hover:scale-110" />
            <span className="text-[9px] font-bold">FOOD</span>
          </NavLink>

          <NavLink to="/cashier/drinks" className={navClass}>
            <RiDrinks2Line className="text-[22px] transition duration-300 group-hover:scale-110" />
            <span className="text-[9px] font-bold">DRINKS</span>
          </NavLink>

          <NavLink to="/cashier/sweets" className={navClass}>
            <PiCake className="text-[22px] transition duration-300 group-hover:scale-110" />
            <span className="text-[9px] font-bold">DESSERT</span>
          </NavLink>

          <NavLink to="/cashier/sides" className={navClass}>
            <PiForkKnifeLight className="text-[22px] transition duration-300 group-hover:scale-110" />
            <span className="text-[9px] font-bold">SIDES</span>
          </NavLink>
        </nav>
      </div>

      <button className="text-slate-300 transition duration-300 hover:text-emerald-500 hover:scale-110 active:scale-95 shrink-0">
        <LuLogOut className="text-[22px]" />
      </button>
    </aside>
  );
}