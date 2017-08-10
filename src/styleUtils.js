import { css } from 'styled-components'

export const media = {
  sm: (...args) => css`
    @media screen and (min-width: 40em) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media screen and (min-width: 52em) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media screen and (min-width: 64em) {
      ${css(...args)}
    }
  `
}
