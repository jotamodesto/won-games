import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { up } from 'styled-breakpoints'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${up('md')({ theme })} {
      padding: ${theme.spacings.medium};
      color: ${theme.colors.black};
      background: ${theme.colors.white};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.xsmall} 0;
      color: ${theme.colors.white};

      ${HeadingStyles.wrapperModifiers.lineLeft(theme, 'secondary')}

      ${up('md')({ theme })} {
        color: ${theme.colors.black};
      }
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    a {
      color: ${theme.colors.primary};
    }

    img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
