import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { down } from 'styled-breakpoints'

import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'

export const Wrapper = styled(Container)`
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
