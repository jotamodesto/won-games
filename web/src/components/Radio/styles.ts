import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { RadioProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    background: transparent;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    outline: none;
    transition: background ${theme.transition.fast};
    appearance: none;

    &::before {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      content: '';
      background: ${theme.colors.primary};
      border-radius: 50%;
      opacity: 0;
      transition: opacity ${theme.transition.fast};
      transform: rotate(45deg);
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
  `}
`
