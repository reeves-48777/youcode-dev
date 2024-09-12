'use client';

import { Button } from '@/components/ui/button';
import Loader from '@/components/ui/loader';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const mutation = useMutation({
    mutationFn: () => signOut(),
  });

  return (
    <Button
      variant='destructive'
      size='sm'
      className='flex gap-2'
      onClick={() => mutation.mutate()}
    >
      {mutation.isPending ? <Loader size={12} /> : <LogOut size={12} />}
      Logout
    </Button>
  );
}
