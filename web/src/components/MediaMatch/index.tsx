import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { down, up } from 'styled-breakpoints'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type MediaMatchProps = {
  up?: Breakpoint
  down?: Breakpoint
}

const mediaMatchModifier = {
  up: (size: Breakpoint, theme: Theme) => css`
    ${up(size)({ theme })} {
      display: block;
    }
  `,
  down: (size: Breakpoint, theme: Theme) => css`
    ${down(size)({ theme })} {
      display: block;
    }
  `
}

const MediaMatch = styled.div<MediaMatchProps>`
  ${({ theme, up: upSize, down: downSize }) => css`
    display: none;

    ${!!upSize && mediaMatchModifier.up(upSize, theme)}
    ${!!downSize && mediaMatchModifier.down(downSize, theme)}
  `}
`

export default MediaMatch
