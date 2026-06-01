import { useEffect, useState } from 'react';
import ProductGrid from '../components/cashier/ProductGrid';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { domain, useSearch } from '../store';

export default function CategoryItemsPage() {
  const { serachValue } = useSearch();

  const params = useParams();
  const [catName, setCatName] = useState('');
  const [products, setProducts] = useState([]);

  const getCategoryItems = () => {
    let catId = params.categoryId;
    let url = domain + `/api/categories/${catId}`;
    axios.get(url, { params: { populate: { items: { populate: '*' } } } }).then((res) => {
      setProducts(res.data.data.items);
      setCatName(res.data.data.name);
    });
  };

  useEffect(() => {
    getCategoryItems();
  }, [params]);

  useEffect(() => {
    if (serachValue) {
      let url = domain + `/api/items`;
      axios
        .get(url, {
          params: {
            populate: '*',
            filters: {
              name: { $contains: serachValue },
            },
          },
        })
        .then((res) => {
          setProducts(res.data.data);
          setCatName('Results');
        });
    } else {
      getCategoryItems();
    }
  }, [serachValue]);

  return <ProductGrid pageTitle={catName} products={products} />;
}
