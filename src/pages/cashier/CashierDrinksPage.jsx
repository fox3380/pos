import ProductGrid from '../../components/cashier/ProductGrid';

export default function CashierDrinksPage() {
  const products = [
    {
      id: 5,
      name: 'Iced Latte',
      desc: 'Cold espresso, milk, ice',
      price: 4.5,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700',
    },
    {
      id: 6,
      name: 'Fresh Orange Juice',
      desc: 'Fresh orange, ice, mint',
      price: 4.2,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=700',
    },
    {
      id: 7,
      name: 'Mint Mojito',
      desc: 'Mint, lemon, soda water',
      price: 5.5,
      image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=700',
    },
    {
      id: 8,
      name: 'Cold Lemonade',
      desc: 'Lemon, sugar, fresh mint',
      price: 3.5,
      image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=700',
    },
  ];

  return <ProductGrid pageTitle="Drinks" products={products} />;
}