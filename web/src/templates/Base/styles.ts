import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.large};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    background-color: ${theme.colors.white};

    ${up('md')({ theme })} {
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    }
  `}
`
