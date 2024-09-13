import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Admin() {
  return (
    <Card className='m-auto mt-4 max-w-xl'>
      <CardHeader>
        <CardTitle>Admin</CardTitle>
      </CardHeader>
      <CardContent className='flex items-center justify-center'>
        <Link
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          href='/admin/courses'
        >
          My Courses
        </Link>
      </CardContent>
    </Card>
  );
}
