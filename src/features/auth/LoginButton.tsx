'use client';

import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Loader from '@/components/ui/loader';

export default function LoginButton() {
  const mutation = useMutation({
    mutationFn: () => signIn(),
  });
  return (
    <Button
      variant='outline'
      size='sm'
      className='flex gap-2'
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
    >
      {mutation.isPending ? <Loader size={12} /> : <LogIn size={12} />}
      Login
    </Button>
  );
}
