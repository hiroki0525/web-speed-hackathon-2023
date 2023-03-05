import { css } from '@emotion/css';

export const container = css`
  opacity: 1;
  position: relative;
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &:hover {
    opacity: 0.8;
  }
`;

export const image = css`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
