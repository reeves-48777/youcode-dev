import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default async function Courses() {
  const session = await getAuthSession();

  if (!session || !session.user) {
    throw new Error('User not found');
  }

  const courses = await prisma.course.findMany({
    where: {
      authorId: session.user.id,
    },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-left'>Titre</TableHead>
          <TableHead className='text-left'>Image</TableHead>
          <TableHead className='text-left'>Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className='font-semibold'>
              <Link href={`/admin/courses/${course.id}`}>{course.title}</Link>
            </TableCell>
            <TableCell>
              {course.image && (
                <img
                  className='h-20'
                  src={course.image}
                  alt='course image'
                />
              )}
            </TableCell>
            <TableCell>{course.createdAt.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
