import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
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
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    cursor: pointer;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0;
    border-radius: ${theme.border.radius};

    ${wrapperModifiers[size!](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
