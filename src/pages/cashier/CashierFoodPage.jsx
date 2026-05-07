import ProductGrid from '../../components/cashier/ProductGrid';

export default function CashierFoodPage() {
  const products = [
    {
      id: 1,
      name: 'Classic Wagyu Burger',
      desc: 'Organic beef, cheddar, truffle mayo',
      price: 18.5,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700',
    },
    {
      id: 2,
      name: 'Truffle Margherita',
      desc: 'Buffalo mozzarella, fresh basil',
      price: 22,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700',
    },
    {
      id: 3,
      name: 'Avocado Power Bowl',
      desc: 'Quinoa, baby spinach, citrus dressing',
      price: 14.2,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700',
    },
    {
      id: 4,
      name: 'Crispy Calamari',
      desc: 'Zesty lemon, homemade tartare',
      price: 12.5,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700',
    },
  ];

  return <ProductGrid pageTitle="Main Course" products={products} />;
}