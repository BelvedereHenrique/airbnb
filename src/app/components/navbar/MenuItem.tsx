'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}
export const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='xs:w-40 w-48 break-keep px-4 py-3 font-semibold transition hover:bg-neutral-100'
    >
      {label}
    </div>
  );
};
