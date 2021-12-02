import { Global, ThemeProvider } from '@emotion/react'
import { ThemeProvider as ThemeProviderOld } from 'emotion-theming';

import globalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <ThemeProviderOld theme={theme} >
        <Story />
      </ThemeProviderOld>
    </ThemeProvider>
  )
]
