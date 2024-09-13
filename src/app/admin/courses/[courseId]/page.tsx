type CourseParams = {
  params: {
    courseId: string;
  };
};

import { Typography } from '@/components/typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { prisma } from '@/lib/prisma';

export default async function Course({ params }: CourseParams) {
  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  if (!course) throw new Error('Course not found');

  return (
    <Card className='m-auto mt-4'>
      <CardHeader className='flex flex-col gap- 2 items-start justify-center'>
        {course.image && (
          <figure className='w-full h-40 overflow-hidden object-cover rounded-lg'>
            <img
              src={course.image}
              alt='course image'
            />
          </figure>
        )}
        <Typography
          variant='h2'
          className='z-40'
        >
          {course.title}
        </Typography>
        <CardDescription className='z-40'>
          Created at: {course.createdAt.toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti
        blanditiis nisi veritatis voluptates ipsa obcaecati ab ullam saepe, in
        nulla! Tempora, quas quaerat sit corrupti fugiat fugit? Minus
        consequatur alias et at magni ea! Assumenda fuga commodi distinctio
        expedita excepturi corporis placeat, ea officiis debitis obcaecati rem a
        ad?
      </CardContent>
    </Card>
  );
}
