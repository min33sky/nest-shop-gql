import React from 'react';
import { Product as ProductType } from '@/graphql/types';
import Link from 'next/link';
import Image from 'next/image';

interface Props extends ProductType {}

export default function Product({ id, name, price, image }: Props) {
  return (
    <article className="relative h-80 w-80">
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} fill={true} className="object-cover" />
      </Link>
    </article>
  );
}
