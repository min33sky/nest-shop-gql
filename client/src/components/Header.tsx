import useCart from '@/store/useCart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const { cartOpen, openCart, closeCart, productsInCart } = useCart();

  const toggleCart = () => {
    if (cartOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  return (
    <header className="bg-slate-700 py-3 text-white">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <div className="text-lg font-bold">Logo</div>

        <div>{cartOpen ? '열림' : '닫히미'}</div>

        <div>
          <button
            onClick={toggleCart}
            className="relative rounded-full p-1 transition hover:bg-slate-500"
          >
            <ShoppingCartIcon className="h-8 w-8" />
            <div className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2.5 text-white">
              {productsInCart.length}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
