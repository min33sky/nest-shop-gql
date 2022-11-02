import useCart from '../store/useCart';
import { useEffect, useState } from 'react';
import { useBearStore } from '../store';
import Header from '@/components/Header';

export default function Home() {
  const [mount, setMount] = useState(false);
  const { productsInCart, total, closeCart, openCart, cartOpen } = useCart();

  // useEffect(() => {
  //   setMount(true);
  // }, []);

  // if (!mount) return null;

  return (
    <div className="flex flex-col h-full bg-slate-800 text-white">
      <h1>총가격 : {total}</h1>
    </div>
  );
}
