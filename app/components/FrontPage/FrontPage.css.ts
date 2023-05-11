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
      marginTop: vars.space['15x'],
    },
    tablet: {
      justifyContent: 'center',
      marginTop: 0,
    },
  }),
});

export const heading = style({
  textAlign: 'center',
  padding: vars.space['2x'],
  ...responsiveStyle({
    mobile: {
      marginBottom: vars.space['5x'],
      fontSize: '6rem',
      lineHeight: '6rem',
    },
    tablet: {
      border: '10px solid blue',
      fontSize: '8rem',
      lineHeight: '8rem',
    },
    desktop: {
      width: '50%',
      border: '10px solid red',
      // fontSize: '10rem',
      // lineHeight: '10rem',
      marginBottom: 0,
    },
    wide: {
      border: '10px solid cyan',
    },
  }),
});

export const ctaButton = style([
  {
    border: `2px solid ${palette.white}`,
    background: 'transparent',
    color: palette.white,
    borderRadius: '9999px',
    ...responsiveStyle({
      mobile: {
        fontSize: '2rem',
        lineHeight: '2.25rem',
      },
      tablet: {
        width: '50%',
        fontSize: '3rem',
        lineHeight: '3rem',
      },
      desktop: {
        width: '30%',
      },
      wide: {},
    }),
  },
  atoms({
    paddingY: '2x',
    paddingX: '3x',
  }),
]);
