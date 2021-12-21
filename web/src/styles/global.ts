import { css, Theme } from '@emotion/react'

export type GlobalStylesProps = {
  removeBg?: boolean
}

const globalStyles = (props?: GlobalStylesProps) => {
  const { removeBg } = props || {}
  return (theme: Theme) =>
    css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        ${!removeBg &&
        css`
          background-color: ${theme.colors.mainBg};
        `}
      }
    `
}

export default globalStyles
