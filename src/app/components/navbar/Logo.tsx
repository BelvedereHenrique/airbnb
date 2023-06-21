'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src='/images/logo.png'
      alt='Logo'
      className='hidden cursor-pointer md:block'
      height={100}
      width={100}
    />
  );
};
