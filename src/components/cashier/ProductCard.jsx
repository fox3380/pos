export default function ProductCard({ item }) {
  return (
    <div className="group bg-white rounded-[26px] p-3 border border-slate-100 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-100">
      <div className="w-full h-[180px] sm:h-[190px] rounded-[22px] overflow-hidden bg-slate-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pt-4 px-1 min-h-[92px] flex flex-col">
        <h3 className="text-sm font-bold text-slate-900 transition duration-300 group-hover:text-emerald-600">
          {item.name}
        </h3>

        <p className="text-[11px] text-slate-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {item.desc}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-emerald-500 font-bold text-sm">
            ${item.price.toFixed(2)}
          </span>

          <button className="w-8 h-8 rounded-xl bg-emerald-500 text-white text-lg leading-none shadow-md transition duration-300 hover:bg-emerald-600 hover:scale-110 active:scale-95">
            +
          </button>
        </div>
      </div>
    </div>
  );
}