import { useEffect, useState } from 'react';
import ProductGrid from '../components/cashier/ProductGrid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { domain } from '../store';

export default function CategoryItemsPage() {

  const params = useParams();
  const [catName, setCatName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let catId = params.categoryId;
    let url = domain + `/api/categories/${catId}`;
    axios.get(url, { params: { populate: { items: { populate: '*' } } } }).then((res) => {
      console.log(res.data.data);
      setProducts(res.data.data.items);
      setCatName(res.data.data.name);
    });
  }, [params]);

  return <ProductGrid pageTitle={catName} products={products} />;
}
