import type { LegacyRef, ReactNode } from 'react';
import cs from 'classnames';

interface PageProps {
  children: ReactNode;
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
}
export function FrontPage({ className, innerRef, ...props }: PageProps): JSX.Element {
  return (
    <section
      className={cs('flex flex-col p-10 min-h-screen items-center justify-center', className)}
      ref={innerRef}
      {...props}
    />
  );
}
