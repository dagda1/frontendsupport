import { style } from '@vanilla-extract/css';

export const imageHolder = style({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0 10vw',
});

export const caption = style({
  paddingLeft: '20rem',
  right: 0,
});

export const caption2 = style({
  paddingLeft: '10rem',
  paddingRight: '10rem',
});

export const tripleImages = style({
  position: 'relative',
  maxWidth: '110rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10rem 0',
});

globalStyle(`${tripleImages} img`, {
  width: '100%',
  height: '100%',
});

globalStyle(`${tripleImages}.frameworks figure:first-child`, {
  width: '50vh',
  height: '50vh',
  paddingBottom: '100%',
  top: '-12rem',
});

globalStyle(`${tripleImages}.frameworks figure:nth-child(2)`, {
  width: '45vh',
  height: '50vh',
  position: 'absolute',
  top: '10%',
  right: '-20%',
});

globalStyle(`${tripleImages}.frameworks figure:last-child`, {
  width: '20vh',
  height: '13rem',
  position: 'absolute',
  bottom: '-10%',
  left: '-20%',
});

globalStyle(`${tripleImages}.oss figure:first-child`, {
  width: '80vh',
  height: '40vh',
  paddingBottom: '100%',
  top: '-12rem',
});

globalStyle(`${tripleImages}.oss figure:nth-child(2)`, {
  width: '45vh',
  height: '40vh',
  position: 'absolute',
  top: '10%',
  left: '-50%',
  zIndex: 3,
});

globalStyle(`${tripleImages}.oss figure:last-child`, {
  width: '67vh',
  height: '26rem',
  position: 'absolute',
  bottom: '-20%',
  left: '-20%',
});

globalStyle(`${tripleImages}.clients figure:first-child`, {
  width: '50vh',
  height: '50vh',
  paddingBottom: '100%',
  top: '-13rem',
  left: '50%',
});

globalStyle(`${tripleImages}.clients figure:nth-child(2)`, {
  width: '55vh',
  height: '50vh',
  position: 'absolute',
  top: '-10%',
  left: '-50%',
  zIndex: 3,
});

globalStyle(`${tripleImages}.clients figure:last-child`, {
  width: '67vh',
  height: '26rem',
  position: 'absolute',
  bottom: '-40%',
  left: '-20%',
});
