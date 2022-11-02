import { useRouter } from 'next/router';
import React from 'react';

export default function ProductDetails() {
  const router = useRouter();
  const id = router.query.id;

  return <div>ProductDetails: {id}</div>;
}
