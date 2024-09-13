import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import LogoutButton from '@/features/auth/LogoutButton';
import { getAuthSession } from '@/lib/auth';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';

export default async function Account() {
  const session = await getAuthSession();

  if (!session) {
    throw new Error('Session not found');
  }

  return (
    <Card className='max-w-lg m-auto mt-4'>
      <CardHeader className='flex items-center flex-row gap-4 space-y-0'>
        <Avatar>
          <AvatarFallback>{session.user.email?.[0]}</AvatarFallback>
          <AvatarImage
            src={session.user.image!}
            alt='user image'
          />
        </Avatar>
        <div className='space-y-1'>
          <CardTitle>{session.user.email}</CardTitle>
          <CardDescription>{session.user.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <Link
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          href='/account/settings'
        >
          Settings
        </Link>
        <Link
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          href='/admin'
        >
          Admin
        </Link>
      </CardContent>
      <CardFooter className='flex flex-row-reverse'>
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}
