import type { LegacyRef, ReactNode } from 'react';
import cs from 'classnames';

interface PageProps {
  children: ReactNode;
  innerRef?: LegacyRef<HTMLDivElement>;
  className?: string;
}
export function FrontPage({ className, innerRef, ...props }: PageProps): JSX.Element {
  return <section className={cs('front', className)} ref={innerRef} {...props} />;
}
