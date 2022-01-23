import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    padding-right: calc(${theme.grid.gutter} / 2);
    padding-left: calc(${theme.grid.gutter} / 2);
    margin-right: auto;
    margin-left: auto;
  `}
`
