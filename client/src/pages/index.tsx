import useCart from '../store/useCart';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '@/api';

export default function Home() {
  const [mount, setMount] = useState(false);
  const { productsInCart, total, closeCart, openCart, cartOpen } = useCart();
  const { data } = useQuery(['allProducts'], getAllProducts);

  // useEffect(() => {
  //   setMount(true);
  // }, []);

  // if (!mount) return null;

  return (
    <div className="flex h-full flex-col bg-slate-800 text-white">
      <h1>총가격 : {total}</h1>
    </div>
  );
}
