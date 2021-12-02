import styled from '@emotion/styled'
import { css } from '@emotion/react'

import type { LogoProps } from '.'

export const Wrapper = styled.div<{ color: LogoProps['color'] }>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
