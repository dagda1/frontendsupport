import { NavLink } from '@remix-run/react';

export function CTAButton(): JSX.Element {
  return (
    <NavLink to="/contact" className="ctaButton border-2 border-white py-5 px-10 rounded-full rubik text-2xl">
      GET IN TOUCH
    </NavLink>
  );
}
