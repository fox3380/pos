import { BsTrash3 } from 'react-icons/bs';

export default function OrderPanel({
  orderItems,
  increaseQuantity,
  decreaseQuantity,
  clearOrder,
  subtotal,
  tax,
  total,
}) {
  return (
    <aside className="w-full lg:w-[330px] lg:h-dvh border-t lg:border-t-0 lg:border-l border-slate-100 bg-white flex flex-col shrink-0">
      <div className="min-h-[70px] px-4 sm:px-6 lg:px-7 flex items-center justify-between shrink-0">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Current Order</h2>

        <button
          onClick={clearOrder}
          className="text-rose-400 transition duration-300 hover:scale-125 hover:text-rose-500 active:scale-95"
        >
          <BsTrash3 className="text-base" />
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-7">
        <div className="h-11 rounded-2xl bg-slate-50 p-1 flex items-center">
          <button className="flex-1 h-full rounded-xl bg-white text-xs font-semibold text-emerald-500 shadow-sm transition duration-300 hover:bg-emerald-50">
            Dine In
          </button>

          <button className="flex-1 h-full rounded-xl text-xs font-semibold text-slate-300 transition duration-300 hover:text-emerald-500 hover:bg-white">
            Take Away
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-7 pt-7 lg:pt-9 space-y-5 overflow-y-auto max-h-[360px] lg:max-h-none">
        {orderItems.length === 0 ? (
          <p className="text-xs text-slate-300 text-center pt-12">No items in order</p>
        ) : (
          orderItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 transition duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 shrink-0 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-slate-900 leading-tight truncate">
                  {item.name}
                </h4>

                <p className="text-xs font-bold text-emerald-500 mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="h-8 px-3 rounded-xl bg-slate-50 flex items-center gap-3 transition duration-300 hover:bg-emerald-50">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-slate-400 text-sm transition hover:text-rose-400 active:scale-90"
                >
                  −
                </button>

                <span className="text-xs font-bold text-slate-700">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="text-emerald-500 text-sm transition hover:scale-125 active:scale-90"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-slate-100 p-4 sm:p-6 lg:p-7">
        <div className="space-y-3 pb-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest text-slate-300">
              SUBTOTAL
            </span>

            <span className="text-xs font-bold text-slate-700">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest text-slate-300">
              SERVICE TAX (5%)
            </span>

            <span className="text-xs font-bold text-slate-700">
              ${tax.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-5 mb-5">
          <span className="text-base font-bold text-slate-800">Total Due</span>

          <span className="text-2xl font-black text-emerald-500 transition duration-300 hover:scale-105">
            ${total.toFixed(2)}
          </span>
        </div>

        <button className="w-full h-12 rounded-2xl bg-emerald-500 text-white text-[10px] font-bold tracking-[0.18em] shadow-md transition duration-300 hover:bg-emerald-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-100 active:scale-[0.98]">
          PROCEED TO CHECKOUT →
        </button>
      </div>
    </aside>
  );
}