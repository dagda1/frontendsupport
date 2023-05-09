import type { ReactNode, Ref } from 'react';
import cs from 'classnames';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, ...props }: PanelProps) {
  return (
    <article
      className={cs('panel h-full w-full flex flex-1 justify-center items-center relative p-0', className)}
      ref={innerRef}
      {...props}
    />
  );
}
