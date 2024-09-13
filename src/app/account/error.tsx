'use client'; // Error boundaries must be Client Components

import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { Card, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import LoginButton from '@/features/auth/LoginButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { data: session } = useSession();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className='max-w-lg m-auto mt-4'>
      <CardHeader>
        <CardTitle>You need to be logged in to view this page</CardTitle>
      </CardHeader>
      <CardFooter>
        <LoginButton />
      </CardFooter>
    </Card>
  );
}
