import type { ReactNode, Ref } from 'react';
import cs from 'classnames';

interface ContentProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Content({ className, innerRef, ...props }: ContentProps) {
  return <article className={cs('content ', className)} ref={innerRef} {...props} />;
}
