'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Session } from 'next-auth';
import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useMutation } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import Loader from '@/components/ui/loader';

type LoggedInButtonProps = {
  user: Session['user'];
};

export default function LoggedInButton(props: LoggedInButtonProps) {
  const mutation = useMutation({
    mutationFn: () => signOut(),
  });

  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='sm'
            className='flex gap-2'
          >
            <Avatar className='size-6'>
              <AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
              {props.user.image && (
                <AvatarImage
                  src={props.user.image}
                  alt={props.user.name ?? 'user picture'}
                />
              )}
            </Avatar>
            {props.user.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem>
              <Button
                variant='ghost'
                size='sm'
                className='flex gap-4'
              >
                <LogOut size={12} />
                Log out
              </Button>
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
        <AlertDialogContent>
          <AlertDialogHeader>
            Are you sure you want to disconnect ?
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant='outline'>Cancel</Button>
            </AlertDialogCancel>
            <Button
              variant='destructive'
              className='flex gap-2'
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? <Loader size={12} /> : <LogOut size={12} />}
              Log out
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
}
