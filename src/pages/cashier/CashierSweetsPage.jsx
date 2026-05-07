import ProductGrid from '../../components/cashier/ProductGrid';

export default function CashierSweetsPage() {
  const products = [
    {
      id: 9,
      name: 'Cheesecake',
      desc: 'Cream cheese, biscuit, berries',
      price: 6.5,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700',
    },
    {
      id: 10,
      name: 'Chocolate Lava Cake',
      desc: 'Warm chocolate, soft center',
      price: 6.2,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700',
    },
    {
      id: 11,
      name: 'Tiramisu',
      desc: 'Coffee cream, cocoa, biscuit',
      price: 5.8,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700',
    },
    {
      id: 12,
      name: 'Ice Cream Scoop',
      desc: 'Vanilla, chocolate, strawberry',
      price: 3.9,
      image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=700',
    },
  ];

  return <ProductGrid pageTitle="Dessert" products={products} />;
}