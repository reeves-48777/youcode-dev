import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LogoutButton from '@/features/auth/LogoutButton';
import { getAuthSession } from '@/lib/auth';

export default async function Account() {
  const session = await getAuthSession();

  if (!session) {
    throw new Error('Session not found');
  }

  return (
    <div className='flex items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>My account</CardTitle>
          <CardDescription>View you profile informations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col text-sm gap-3'>
            <label>
              Name
              <p>{session.user.name}</p>
            </label>
            <label>
              Email
              <p className='text-muted-foreground'>{session.user.email}</p>
            </label>
          </div>
          <div className='mt-2 flex items-center justify-end w-full'>
            <LogoutButton />
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            size='sm'
          >
            Admin
          </Button>
          <Button
            variant='ghost'
            size='sm'
          >
            Modifier le profil
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
