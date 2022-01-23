import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.white};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &::before {
        border-right-width: 1rem;
      }
    }

    ${up('md')({ theme })} {
      ${RibbonStyles.Wrapper} {
        top: ${theme.spacings.small};
        right: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        &::before {
          border: none;
        }
      }
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    ${up('md')({ theme })} {
      max-width: 77rem;
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${up('md')({ theme })} {
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    }
  `}
`
