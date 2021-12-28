import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gameSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gameSliderMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gameSliderMock[0]],
  upcommingGames: [gameSliderMock[0]],
  upcommingHihghlight: highlightMock,
  upcommingMoreGames: [gameSliderMock[0]],
  freeGames: [gameSliderMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Banner Slider" />
  }
}))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
