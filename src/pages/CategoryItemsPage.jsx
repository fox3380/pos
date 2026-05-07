import { useEffect, useState } from 'react';
import ProductGrid from '../components/cashier/ProductGrid';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CategoryItemsPage() {
  let domain = 'https://pos.skyready.online';
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let catId = params.categoryId;
    axios.get(domain + `/api/categories/${catId}?populate=*`).then((res) => {
      setProducts(res.data.data.items);
      console.log(res.data);
    });
  }, [params]);

  return <ProductGrid pageTitle="Drinks" products={products} />;
}
