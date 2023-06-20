import { atoms, palette, responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const ctaButton = style([
  {
    border: `2px solid ${palette.white}`,
    background: 'transparent',
    color: palette.white,
    borderRadius: '9999px',
    fontWeight: 'bold',
    ...responsiveStyle({
      mobile: {
        fontSize: '1.5rem',
      },
      tablet: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      desktop: {},
      wide: {},
    }),
  },
  atoms({
    paddingY: 'xsmall',
    paddingX: {
      mobile: 'small',
      desktop: 'medium',
      wide: 'large',
    },
  }),
]);
