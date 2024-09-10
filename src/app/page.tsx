import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAuthSession } from '@/lib/auth';
import { Suspense } from 'react';

export default async function Home() {
  const session = await getAuthSession();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Card</CardTitle>
        <CardDescription>On teste si la connexion se fait bien</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={'Loading...'}>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </Suspense>
      </CardContent>
    </Card>
  );
}
