'use client';

import { Button } from './ui/button';
import Image from 'next/image';
import Github from '@/app/icons/github.svg';
import { signIn, useSession, signOut } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent } from './ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogFooter,
} from './ui/alert-dialog';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

export default function ConnectionButton() {
  const session = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (session && session.data) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost'>
              <Avatar>
                <AvatarImage
                  src={session.data.user.image!}
                  alt={`@${session.data.user.name}`}
                />
                <AvatarFallback>
                  {session.data.user.name
                    ?.split(' ')
                    .map((word) => word.charAt(0).toUpperCase())
                    .join('')}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Button
                variant='outline'
                onClick={() => setIsDialogOpen(true)}
              >
                Se déconnecter
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <AlertDialogTrigger asChild></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Etes-vous sûr ?</AlertDialogTitle>
              <AlertDialogDescription>
                Vous allez être déconnecté !
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                Non
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => signOut()}>
                Oui
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
  return (
    <Button
      className='flex gap-3'
      onClick={() => signIn('github')}
    >
      Connect with
      <Image
        src={Github}
        alt='github icon'
      />
    </Button>
  );
}
