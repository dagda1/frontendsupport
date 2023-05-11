import { NavLink } from '@remix-run/react';
import type { ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './CTAButton.css';
import type { Ref } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  link: string;
  innerRef?: Ref<HTMLAnchorElement>;
}

export function CTAButton({ children, link, className, innerRef }: CTAButtonProps): JSX.Element {
  return (
    <NavLink ref={innerRef} to={link} className={cs(styles.ctaButton, className)}>
      {children}
    </NavLink>
  );
}
