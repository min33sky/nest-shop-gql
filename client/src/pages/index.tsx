import { useEffect, useState } from 'react';
import { useBearStore } from '../store';
import { useCart } from '../store/useCart';

export default function Home() {
  const [mount, setMount] = useState(false);
  const { productsInCart, total } = useCart();

  // useEffect(() => {
  //   setMount(true);
  // }, []);

  // if (!mount) return null;

  return (
    <div className="flex flex-col h-screen bg-slate-800 text-white">
      <h1>총가격 : {total}</h1>
    </div>
  );
}
