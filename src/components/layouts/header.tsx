import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { Typography } from '../typography';
import AuthButton from '@/features/auth/AuthButton';

export async function Header() {
  return (
    <header className='bg-background sticky top-0 z-40 w-full border-b'>
      <div className='px-2 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <div className='flex'>
          <Typography
            variant='h3'
            as={Link}
            href='/'
          >
            {SiteConfig.title}
          </Typography>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <AuthButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
