import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

export const Wrapper = styled.div`
  position: relative;

  ${up('md')} {
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  }
`

type ImageProps = { src: string }

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${up('md')({ theme })} {
      height: 58rem;
    }
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.7);

    ${up('md')({ theme })} {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: ${theme.spacings.large};
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${up('md')({ theme })} {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};

    ${up('md')({ theme })} {
      font-size: ${theme.font.sizes.large};
    }
  `}
`
