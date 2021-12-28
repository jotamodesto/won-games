import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'

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

export const SectionNews = styled.div`
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

export const SectionUpcomming = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`
