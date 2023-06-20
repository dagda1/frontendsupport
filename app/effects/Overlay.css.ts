import { palette, responsiveStyle, vars } from '@cutting/component-library';
import { globalStyle, style } from '@vanilla-extract/css';

export const panels = style({
  display: 'flex',
  flexWrap: 'nowrap',
  overscrollBehavior: 'none',
  flexDirection: 'row',
});

export const imageHolder = style({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '0 10vw',
});

export const breaking = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  paddingRight: vars.space['xxlarge'],
  paddingLeft: vars.space['xxlarge'],
  position: 'relative',
  minHeight: '100vh',
});

globalStyle(`${breaking} img`, {
  zIndex: 3,
});

globalStyle('figure', {
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});

globalStyle('figure img', {
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
});

export const services = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const startContent = style({
  flex: '0 0 100vw',
});

export const item = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

globalStyle(`${item} h2`, {
  fontSize: '5rem',
});

export const doubleImages = style({
  position: 'relative',
  width: '90rem',
  display: 'flex',
});

globalStyle(`${doubleImages} figure:first-child`, {
  flexBasis: '60rem',
  flexShrink: 0,
  height: '80vh',
});

globalStyle(`${doubleImages} figure:last-child`, {
  position: 'absolute',
  top: 'auto',
  ...responsiveStyle({
    mobile: {
      maxWidth: '51rem',
      height: '62vh',
      bottom: '-5rem',
      right: 0,
    },
    desktop: {
      maxWidth: '51rem',
      height: '62vh',
      bottom: '-5rem',
      right: '40rem',
    },
  }),
});

export const caption = style({
  paddingLeft: '20rem',
  right: 0,
});

export const caption2 = style({
  paddingLeft: '10rem',
  paddingRight: '10rem',
});

globalStyle(`${caption} h2, ${caption2} h2`, {
  textTransform: 'uppercase',
  lineHeight: 1,
  ...responsiveStyle({
    mobile: {
      fontSize: '3rem',
      width: '50%',
    },
    desktop: {
      fontSize: '4rem',
      width: '100%',
    },
  }),
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

export const final = style({
  display: 'flex',
  alignItems: 'flex-end',
  position: 'relative',
  zIndex: 4,
});
