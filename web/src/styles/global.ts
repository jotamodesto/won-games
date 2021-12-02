import { css, Theme } from '@emotion/react'

const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  }
`

export default globalStyles
