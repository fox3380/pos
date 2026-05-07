import ProductGrid from '../../components/cashier/ProductGrid';

export default function CashierSidesPage() {
  const products = [
    {
      id: 13,
      name: 'French Fries',
      desc: 'Crispy fries with sea salt',
      price: 3.9,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700',
    },
    {
      id: 14,
      name: 'Garden Salad',
      desc: 'Mixed greens, tomato, dressing',
      price: 5.5,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700',
    },
    {
      id: 15,
      name: 'Onion Rings',
      desc: 'Crispy onion with dip sauce',
      price: 4.2,
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=700',
    },
    {
      id: 16,
      name: 'Mashed Potatoes',
      desc: 'Creamy potatoes with butter',
      price: 4.5,
      image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=700',
    },
  ];

  return <ProductGrid pageTitle="Sides" products={products} />;
}