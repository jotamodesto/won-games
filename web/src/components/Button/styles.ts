import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { darken } from 'polished'

import type { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'showType'
>

const wrapperModifiers = {
  small: (theme: Theme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: Theme) => css`
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: Theme) => css`
    height: 5rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: Theme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  text: (theme: Theme) => css`
    color: ${theme.colors.primary};
    background: none;

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, showType }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0;
    border-radius: ${theme.border.radius};
    transition: all 0.3s linear;

    &:hover {
      background: ${showType === 'text'
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${wrapperModifiers[size!](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${hasIcon && wrapperModifiers.withIcon(theme)}
    ${showType === 'text' && wrapperModifiers[showType](theme)}
  `}
`
