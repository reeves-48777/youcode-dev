import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CourseLoading() {
  return (
    <Card className='m-auto mt-4'>
      <CardHeader className='flex flex-col gap-4'>
        <Skeleton className='h-40 w-full bg-muted' />
        <Skeleton className='h-10 w-3/4 bg-muted' />
        <Skeleton className='h-5 w-1/4 bg-muted' />
      </CardHeader>
      <CardContent>
        <Skeleton className='h-72 w-full bg-muted' />
      </CardContent>
    </Card>
  );
}
