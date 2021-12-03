import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { down } from 'styled-breakpoints'

import type { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: (theme: Theme) => css`
    ${down('md')({ theme })} {
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<{
  color: LogoProps['color']
  size: LogoProps['size']
  hideOnMobile: LogoProps['hideOnMobile']
}>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${wrapperModifiers[size!]()}
    ${hideOnMobile && wrapperModifiers.hideOnMobile(theme)}
  `}
`
