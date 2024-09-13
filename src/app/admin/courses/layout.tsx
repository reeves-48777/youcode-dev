import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PropsWithChildren } from 'react';

export default function CoursesLayout({ children }: PropsWithChildren) {
  return (
    <Card className='mt-4'>
      <CardHeader>
        <CardTitle>Your courses</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
