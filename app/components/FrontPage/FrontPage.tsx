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
      className={cs('flex front flex-col h-full w-full overflow-hidden items-center justify-center', className)}
      ref={innerRef}
      {...props}
    />
  );
}
