import { createCheckOut } from '@/api';
import useCart from '@/store/useCart';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();

  const { cartOpen, closeCart, productsInCart, total } = useCart();
  const { mutate } = useMutation(createCheckOut, {
    onSuccess: (data) => {
      console.log('성공', data);
      router.push(data.createCheckoutSession.url);
    },
    onError: (error) => {
      console.log('실패: ', error);
    },
  });

  const itemsForStripe = productsInCart.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));

  const handleCheckout = () => {
    console.log('결제 시작......');
    console.log('itemsForStripe: ', itemsForStripe);
    mutate({
      items: itemsForStripe,
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 flex h-full w-80 flex-col bg-slate-300 py-16 px-4 transition duration-500 ease-in-out ${
        cartOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button onClick={() => closeCart()}>
        <XCircleIcon className="absolute top-5 right-5 h-8 w-8 text-slate-700 transition hover:text-rose-500" />
      </button>

      <h1 className="mb-10 text-center text-2xl font-bold">Cart</h1>

      <div className="mb-10 flex flex-col space-y-4">
        {productsInCart.map((product) => (
          <div key={product.id} className="flex flex-col space-y-2">
            <figure className="relative h-16 w-16">
              <Image src={product.image} fill alt="productImage" />
            </figure>
            <p>이름: {product.name}</p>
            <p>수량: {product.quantity}</p>
            <p>개당 가격: ${product.price}</p>
            <p>가격: ${product.price * product.quantity}</p>
          </div>
        ))}
        <p>총 가격: ${total}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="bg-slate-800 py-2 text-center text-slate-200"
      >
        구매
      </button>
    </div>
  );
}
