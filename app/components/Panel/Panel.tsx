import type { ReactNode, Ref } from 'react';
import cs from 'classnames';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, ...props }: PanelProps) {
  return (
    <section
      className={cs('panel h-full w-full justify-center items-center relative p-10 text-center', className)}
      ref={innerRef}
      {...props}
    />
  );
}
