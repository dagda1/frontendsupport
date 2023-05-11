import { atoms, responsiveStyle, vars } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const container = style([
  {
    padding: '0 !IMPORTANT',
    position: 'fixed',
    backgroundColor: 'inherit',
    paddingBottom: vars.space['5x'],
    zIndex: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: vars.space['12x'],
    ...responsiveStyle({
      mobile: {
        justifyContent: 'space-around',
      },
      tablet: {
        justifyContent: 'space-around',
      },
    }),
  },
  atoms({
    paddingX: {
      mobile: '2x',
      tablet: '10x',
    },
    paddingY: '2x',
  }),
]);
