import React from 'react';
import { Product as ProductType } from '@/graphql/types';
import Link from 'next/link';
import Image from 'next/image';

interface Props extends ProductType {}

export default function Product({ id, name, price, image }: Props) {
  return (
    <article>
      <Link href={`/product/${id}`}>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          objectFit="contain"
        />
      </Link>
    </article>
  );
}
