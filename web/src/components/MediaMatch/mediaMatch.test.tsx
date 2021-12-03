import { matchers } from '@emotion/jest'
import { render, screen } from '@testing-library/react'

import MediaMatch from '.'

expect.extend(matchers)

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch up="md">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch down="md">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide base on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 48em)'
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 61.99875em)'
    })
  })
})
