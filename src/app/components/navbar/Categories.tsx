'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { Container } from '../Container';
import CategoryBox from './CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills nearby',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has a pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing nearby!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is in a castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping cativities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in the arctic!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property has a cave nearby!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurious!',
  },
];

export const Categories = () => {
  const params = useSearchParams();
  const selectedCategory = params?.get('category');
  const pathName = usePathname();
  const isMainPage = pathName === '/';
  if (!isMainPage) return null;

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto scrollbar'>
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            {...category}
            selected={selectedCategory === category.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
