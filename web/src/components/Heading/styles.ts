import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { up } from 'styled-breakpoints'

import type { HeadingProps } from '.'

type LineColor = NonNullable<HeadingProps['lineColor']>

const wrapperModifiers = {
  lineLeft: (theme: Theme, lineColor: LineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: Theme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 5rem;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${up('md')({ theme })} {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `,
  small: (theme: Theme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${wrapperModifiers[size!](theme)}
  `}
`
