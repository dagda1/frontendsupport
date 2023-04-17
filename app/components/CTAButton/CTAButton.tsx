import { NavLink } from '@remix-run/react';

export function CTAButton(): JSX.Element {
  return (
    <NavLink to="/contact" className="ctaButton contact">
      GET IN TOUCH
    </NavLink>
  );
}
