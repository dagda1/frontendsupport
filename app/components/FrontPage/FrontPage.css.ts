import { atoms, palette, responsiveStyle, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  ...responsiveStyle({
    mobile: {
      justifyContent: 'flex-start',
      marginTop: vars.space['xxxlarge'],
    },
    tablet: {
      justifyContent: 'center',
      marginTop: 0,
    },
  }),
});

export const heading = style({
  // textAlign: 'center',
  // padding: vars.space['small'],
  // ...responsiveStyle({
  //   mobile: {
  //     marginBottom: vars.space['small'],
  //     fontSize: '6rem',
  //     lineHeight: '6rem',
  //   },
  //   tablet: {
  //     fontSize: '8rem',
  //     lineHeight: '8rem',
  //   },
  //   desktop: {
  //     width: '50%',
  //     marginBottom: 0,
  //   },
  //   wide: {
  //     width: '40%',
  //   },
  // }),
});

export const ctaButton = style([
  {
    border: `2px solid ${palette.white}`,
    background: 'transparent',
    color: palette.white,
    borderRadius: '9999px',
    fontWeight: 'bold',
    ...responsiveStyle({
      mobile: {
        fontSize: '1.25rem',
        lineHeight: '2.25rem',
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
    paddingY: 'small',
    paddingX: {
      mobile: 'medium',
      desktop: 'medium',
      wide: 'large',
    },
  }),
]);

export const scroller = style({
  position: 'relative',
  top: vars.space['medium'],
});
