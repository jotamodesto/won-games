import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        background: ${theme.colors.white};
        border-radius: 100%;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
        opacity: 0;
      }
    }

    ${up('lg')({ theme })} {
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        top: 0;
        right: 0;
        flex-direction: column;
        height: 100%;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    }
  `}
`
