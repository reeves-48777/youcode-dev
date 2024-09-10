import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  // returned by useSession, getSession and received as a prop on the SessionProvider react context
  interface Session {
    user: DefaultSession['user'] & {
      id?: string;
    };
  }
}
