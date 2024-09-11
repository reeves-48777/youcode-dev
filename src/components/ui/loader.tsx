import { LucideProps, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Loader({ className, ...props }: LucideProps) {
  return (
    <Loader2
      className={cn('animate-spin', className)}
      {...props}
    />
  );
}
