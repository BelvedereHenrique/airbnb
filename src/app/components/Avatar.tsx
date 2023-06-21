'use client';
import Image from 'next/image';

export const Avatar = () => {
  return (
    <Image
      src='/images/placeholder.jpg'
      className='rounded-full'
      alt='Avatar'
      width={30}
      height={30}
    ></Image>
  );
};
