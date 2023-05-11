import { vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const panels = style({
  width: '500%',
  height: '100vh',
  display: 'flex',
  flexWrap: 'nowrap',
});

export const breaking = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingRight: vars.space['10x'],
  paddingLeft: vars.space['10x'],
  position: 'relative',
  minHeight: '100vh',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
});

export const services = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});
