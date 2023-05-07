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
      className={cs(
        'panel h-screen w-full overflow-hidden flex flex-col justify-center items-center relative p-0',
        className,
      )}
      ref={innerRef}
      {...props}
    />
  );
}
