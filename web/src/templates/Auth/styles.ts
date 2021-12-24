import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { down, up } from 'styled-breakpoints'

import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${up('lg')} {
    grid-template-columns: 1fr 1fr;
  }
`

export const BannerPanel = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};
    background-image: url(/img/auth-bg.jpeg);
    background-position: center center;
    background-size: cover;

    ${down('lg')({ theme })} {
      display: none;
    }

    &::after {
      position: absolute;
      inset: 0;
      content: '';
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    align-self: end;
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`

export const ContentPanel = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.white};
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${up('md')({ theme })} {
      width: 36rem;
    }

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
