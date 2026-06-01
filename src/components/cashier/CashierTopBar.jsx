import { FiSearch } from 'react-icons/fi';
import { useSearch } from '../../store';

export default function CashierTopBar() {
  const { setSearchValue } = useSearch();

  const testInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className="min-h-[70px] border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 shrink-0">
      <div className="w-full md:w-[360px] h-10 rounded-xl border border-slate-100 bg-white flex items-center px-4 gap-3 transition duration-300 hover:border-emerald-100 focus-within:border-emerald-300 focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.08)]">
        <FiSearch className="text-sm text-slate-300 shrink-0" />

        <input onChange={testInput} type="text" placeholder="Search dishes, drinks, extras..." className="w-full h-full outline-none text-xs text-slate-600 placeholder:text-slate-300" />
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4 md:gap-10">
        <div className="px-4 sm:px-5 py-2 rounded-xl bg-emerald-50 text-emerald-500 text-[11px] font-bold transition duration-300 hover:bg-emerald-100 shrink-0">● TABLE 12</div>

        <div className="flex items-center gap-3 transition duration-300 hover:-translate-y-0.5">
          <div className="text-right">
            <h4 className="text-xs font-bold text-slate-800 leading-tight">Ahmed Khalil</h4>
            <p className="text-[9px] tracking-widest text-slate-400">CASHIER STATION</p>
          </div>

          <div className="w-9 h-9 rounded-full border border-slate-200 bg-white transition duration-300 hover:border-emerald-300 hover:shadow-sm shrink-0" />
        </div>
      </div>
    </header>
  );
}
