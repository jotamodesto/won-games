import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { down, up } from 'styled-breakpoints'

import type { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.section<WrapperProps>`
  ${down('lg')} {
    overflow-x: hidden;
  }

  ${({ theme, color }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      flex: 1 0 auto;
      height: 100%;
      margin: 0 ${theme.spacings.xxsmall};
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${up('lg')({ theme })} {
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    }

    .slick-prev,
    .slick-next {
      position: absolute;
      top: 50%;
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      color: ${theme.colors[color!]};
      cursor: pointer;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
