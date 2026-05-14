import noCat from '../../assets/no-pictures.png';
import { NavLink } from 'react-router-dom';
import { TbChefHat } from 'react-icons/tb';
import { LuLogOut } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { domain } from '../../store';

export default function CashierSidebar() {

  const [categories, setCategories] = useState([]);
  const linkStyle = ` group min-w-16 lg:w-14 h-16 py-4 rounded-2xl flex flex-col items-center justify-center gap-1 transition duration-300 hover:-translate-y-1 `;
  useEffect(() => {
    let endPoint = '/api/categories?populate=*';
    let url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch();
  }, []);

  return (
    <aside className="w-full lg:w-17.5 lg:h-dvh border-b lg:border-b-0 lg:border-r border-slate-100 bg-white flex lg:flex-col items-center justify-between gap-4 px-4 py-4 lg:px-0 lg:py-7 shrink-0">
      <div className="flex lg:h-10 lg:grow lg:flex-col items-center gap-4 lg:gap-10 w-full lg:w-auto">
        <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg shrink-0">
          <TbChefHat className="text-[24px]" />
        </div>

        <nav dir="rtl" className="flex  lg:h-10 overflow-auto lg:grow lg:flex-col items-center gap-3 lg:gap-6 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
          {categories.map((el) => {
            return (
              <NavLink end key={el.documentId} to={el.documentId} className={({ isActive }) => linkStyle + (isActive ? ' bg-emerald-50 text-emerald-500 shadow-md shadow-emerald-100' : 'text-slate-300 hover:bg-emerald-50 hover:text-emerald-500')}>
                <img className="w-full h-5 object-contain" src={el.icon ? domain + el.icon?.url : noCat} />
                <span className="text-[9px] font-bold">{el.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <button className="text-slate-300 transition duration-300 hover:text-emerald-500 hover:scale-110 active:scale-95 shrink-0">
        <LuLogOut className="text-[22px]" />
      </button>
    </aside>
  );
}
