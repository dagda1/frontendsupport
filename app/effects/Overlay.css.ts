import { style } from '@vanilla-extract/css';

export const panels = style({
  width: '500%',
  height: '100vh',
  display: 'flex',
  flexWrap: 'nowrap',
});

export const breakingContainer = style({
  backgroundColor: '#138F4A',
  overflowX: 'hidden',
});

export const breaking = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const final = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  minHeight: '100vh',
});
