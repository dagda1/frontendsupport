import { palette } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const panel = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  color: palette.white,
  position: 'relative',
  boxSizing: 'border-box',
});
