import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { up } from 'styled-breakpoints'

import type { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: Theme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: Theme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 5rem;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${up('md')({ theme })} {
      font-size: ${theme.font.sizes.xxlarge};
    }

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
