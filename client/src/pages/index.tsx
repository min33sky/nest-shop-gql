import useCart from '../store/useCart';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api';
import Product from '@/components/Product';

export default function Home() {
  const [mount, setMount] = useState(false);
  const { productsInCart, total, closeCart, openCart, cartOpen } = useCart();
  const { data } = useQuery(['allProducts'], getAllProducts);

  // useEffect(() => {
  //   setMount(true);
  // }, []);

  // if (!mount) return null;

  return (
    <div className="flex flex-1 flex-col bg-slate-800 text-white">
      <div className="mx-auto grid grid-cols-2 gap-2 ">
        {data?.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
