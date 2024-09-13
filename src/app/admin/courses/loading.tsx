import { Skeleton } from '@/components/ui/skeleton';
export default function LoadingCourses() {
  return (
    <div className='flex flex-col gap-6'>
      <Skeleton className='h-20 w-full rounded-md bg-muted' />
      <Skeleton className='h-20 w-full rounded-md bg-muted' />
      <Skeleton className='h-20 w-full rounded-md bg-muted' />
    </div>
  );
}
