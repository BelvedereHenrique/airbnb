'use client';

import Image from 'next/image';
export const Logo = () => {
  return (
    <Image
      src='/images/logo.png'
      alt='Logo'
      className='hidden cursor-pointer md:block'
      height={100}
      width={100}
      priority={false}
    />
  );
};
