import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

import type { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatImage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatImage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, backgroundImage, alignment }) => css`
    position: relative;
    display: grid;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${up('md')({ theme })} {
      height: 32rem;
    }

    ${wrapperModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    grid-area: floatImage;
    align-self: end;
    max-width: 100%;
    max-height: 23rem;

    ${up('md')({ theme })} {
      max-height: 32rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    grid-area: content;
    padding: ${theme.spacings.xsmall};

    ${up('md')({ theme })} {
      align-self: end;
      padding: ${theme.spacings.large};
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
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};

    ${up('md')({ theme })} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
