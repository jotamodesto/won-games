import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    outline: none;
    transition: background border ${theme.transition.fast};
    appearance: none;

    &::before {
      position: absolute;
      top: 0.1rem;
      width: 0.6rem;
      height: 0.9rem;
      content: '';
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      opacity: 0;
      transition: ${theme.transition.fast};
      transform: rotate(45deg);
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    color: ${theme.colors[labelColor!]};
  `}
`
