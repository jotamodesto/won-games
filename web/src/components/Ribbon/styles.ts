import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { darken } from 'polished'

import type { RibbonProps } from '.'

type RibbonColor = NonNullable<RibbonProps['color']>

const wrapperModifiers = {
  color: (theme: Theme, color: RibbonColor) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-top-color: ${darken(0.2, theme.colors[color])};
      border-left-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: Theme) => css`
    right: -2rem;
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: Theme) => css`
    right: -1.5rem;
    height: 2.6rem;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

type WrapperProps = Pick<RibbonProps, 'color' | 'size'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      position: absolute;
      right: 0;
      content: '';
      border-style: solid;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
      border-left-width: 0rem;
    }

    ${wrapperModifiers[size!](theme)}
    ${wrapperModifiers.color(theme, color!)};
  `}
`
