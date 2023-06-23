'use client';

import Image from 'next/image';

interface AvatarProps {
  src?: string | null | undefined;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || `/images/placeholder.jpg`}
      className='rounded-full'
      alt='Avatar'
      width={30}
      height={30}
    ></Image>
  );
};
