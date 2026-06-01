import ProductCard from './ProductCard';

export default function ProductGrid({ pageTitle, products }) {
  return (
    <section className="flex-1 bg-white px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 lg:mb-7">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
          {pageTitle}
        </h1>

        <div className="flex items-center gap-3">
          <button className="h-9 px-5 rounded-xl border border-slate-100 text-xs text-slate-500 transition duration-300 hover:bg-emerald-50 hover:text-emerald-500 hover:border-emerald-100">
            Filter
          </button>

          <button className="h-9 px-5 rounded-xl border border-slate-100 text-xs text-slate-500 transition duration-300 hover:bg-emerald-50 hover:text-emerald-500 hover:border-emerald-100">
            Sort By
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7 overflow-auto">
        {products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}


// State Local (in Each Component into Componenet Scooooope )
// Global State (Store Any Compoenet can CRUD)