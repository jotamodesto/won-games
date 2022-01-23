import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.small};

    ${up('md')({ theme })} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${up('lg')({ theme })} {
      grid-template-columns: repeat(6, 1fr);
    }
  `}
`

export const Block = styled.div``

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
