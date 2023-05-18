import { responsiveStyle } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const startContent = style({
  ...responsiveStyle({
    mobile: {
      flex: 1,
      border: '10px solid yellow',
    },
    desktop: {
      flex: '0 0 100vw',
      border: '10px solid blue',
    },
  }),
});

export const intro = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

globalStyle(`${intro} h2`, {
  fontSize: '5rem',
});
