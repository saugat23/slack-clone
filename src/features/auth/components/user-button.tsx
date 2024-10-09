'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '../hooks/use-current-user';
import { Loader, LogOut } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react';

export default function UserButton() {
  const { isLoading, data } = useCurrentUser();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <Loader className='animate-spin text-muted-foreground size-5' />;
  }

  if (!data) {
    return null;
  }

  const { name } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className='outline-none relative'>
          <Avatar className='size-10 hover:opacity-75 transition'>
            <AvatarImage />
            <AvatarFallback className='bg-sky-500 text-white'>
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='center' side='right' className='w-60'>
          <DropdownMenuItem
            onClick={() => signOut()}
            className='h-10 flex items-center justify-start spaxe-x-2 cursor-pointer'
          >
            <LogOut className='size-4 mr-2' />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
