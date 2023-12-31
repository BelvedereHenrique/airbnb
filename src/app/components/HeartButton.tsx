'use client';

import { User } from '@prisma/client';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
  listingId: string;
  currentUser?: User | null;
  onClick?: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
  onClick,
}) => {
  const hasFavorited = false;
  const toggleFavorite = () => {};

  return (
    <div
      onClick={toggleFavorite}
      className='relative hober:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className='fill-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  );
};

export default HeartButton;
