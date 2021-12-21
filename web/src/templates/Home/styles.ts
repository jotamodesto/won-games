import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { down, up } from 'styled-breakpoints'

import * as HeadingStyles from 'components/Heading/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${down('md')({ theme })} {
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      }
    }

    ${GameCardSliderStyles.Wrapper} {
      ${down('lg')({ theme })} {
        margin-right: calc(-${theme.grid.gutter} / 2);
      }
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${up('md')({ theme })} {
      position: relative;
      z-index: ${theme.layers.base};
      margin: ${theme.spacings.large} 0;
    }
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${up('lg')({ theme })} {
      margin-top: -13rem;
    }

    ${up('md')({ theme })} {
      padding-top: 14rem;
      padding-bottom: 10rem;
      margin-bottom: 0;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      background-color: #f2f2f2;

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }
  `}
`

export const SectionMostPopular = styled(Sections)``

export const SectionUpcomming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFreeGames = styled(Sections)``

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
