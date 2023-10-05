import { css } from "@emotion/css";

type FlexDirections =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export const flex = (
    flexDirection: FlexDirections = 'row',
    justifyContent = 'center',
    alignItems = 'center'
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;