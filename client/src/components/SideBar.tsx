import useCart from '@/store/useCart';
import { XCircleIcon } from '@heroicons/react/24/outline';

export default function SideBar() {
  const { cartOpen, closeCart } = useCart();

  return (
    <div
      className={`fixed top-0 left-0 flex h-full w-72 flex-col bg-slate-300 py-16 px-4 transition duration-500 ease-in-out ${
        cartOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button onClick={() => closeCart()}>
        <XCircleIcon className="absolute top-5 right-5 h-8 w-8 text-slate-700 transition hover:text-rose-500" />
      </button>
      <h1>Cart</h1>
      <div>목록</div>
    </div>
  );
}
