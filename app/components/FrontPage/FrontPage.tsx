import type { LegacyRef, ReactNode } from 'react';
import cs from 'classnames';

interface PageProps {
  children: ReactNode;
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
}
export function Page({ className, innerRef, ...props }: PageProps): JSX.Element {
  return (
    <section
      className={cs('flex flex-col h-screen w-full overflow-hidden  items-center xl:justify-center')}
      ref={innerRef}
      {...props}
    />
  );
}
