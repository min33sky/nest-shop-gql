import { getProductById } from '@/api';
import useCart from '@/store/useCart';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function ProductDetails() {
  const router = useRouter();
  const id = router.query.id;

  const { productsInCart, addProductToCart, removeProductFromCart } = useCart();

  const { data } = useQuery(
    ['getProduct', id],
    () => getProductById(Number(id)),
    {
      enabled: !!id,
    },
  );

  if (!data) {
    return '';
  }

  // 현 상품이 장바구니에 담겨있는지 확인
  const cartItems = productsInCart.find(
    (product) => product.id === data.product.id,
  );

  const {
    product: { name, price, image, description },
  } = data;

  return (
    <div className="mx-auto flex max-w-lg flex-1 flex-col py-4">
      <figure className="relative h-80 w-80">
        <Image src={image} alt={name} fill />
      </figure>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>${price}</p>
      <p>{description}</p>
      <p>장바구니에 담은 현재 상품 개수 : {cartItems?.quantity ?? 0}</p>

      {cartItems && cartItems.quantity > 0 ? (
        <div className="flex space-x-2">
          <button onClick={() => removeProductFromCart(data.product)}>
            -1
          </button>
          <button onClick={() => addProductToCart(data.product)}>+1</button>
        </div>
      ) : (
        <button onClick={() => addProductToCart(data.product)}>
          장바구니에 담기
        </button>
      )}
    </div>
  );
}
