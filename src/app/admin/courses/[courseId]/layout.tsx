import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function CourseLayout({ children }: PropsWithChildren) {
  return (
    <div className='max-w-4xl m-auto mt-4'>
      {children}

      <div className=' flex flex-row-reverse mt-4'>
        <Link
          href='/admin/courses'
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
