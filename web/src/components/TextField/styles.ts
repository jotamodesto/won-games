import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

import type { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = {
  error?: boolean
} & Pick<TextFieldProps, 'disabled'>

export const InputWrapper = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    padding: 0 ${theme.spacings.xsmall};
    background: ${theme.colors.lightGray};
    border: 0.2rem solid ${theme.colors.lightGray};
    border-radius: 0.2rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${iconPosition === 'end' && 'flex-direction: row-reverse;'}
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition === 'end' ? 'right' : 'left'}: ${
    theme.spacings.xsmall
  };
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    background: transparent;
    border: 0;
    outline: none;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`

const wrapperModifiers = {
  disabled: (theme: Theme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      color: ${theme.colors.gray};
      cursor: not-allowed;

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: Theme) => css`
    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${error && wrapperModifiers.error(theme)}
  `}
`
