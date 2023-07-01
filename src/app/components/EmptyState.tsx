'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import Heading from './Heading';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing your filters or remove some of them',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading title={title} subtitle={subtitle} center />
      <div className='w-48 mt-4'>
        <Button
          outline
          label='Reset filters'
          onClick={() => router.push('/')}
        />
      </div>
    </div>
  );
};

export default EmptyState;
