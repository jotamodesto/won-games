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

describe('<Home />', () => {
  beforeEach(() => {
    renderWithTheme(<Home {...props} />)
  })

  it('should render menu and footer', () => {
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    expect(screen.getByRole('heading', { name: /news/i }))
    expect(screen.getByRole('heading', { name: /most popular/i }))
    expect(screen.getByRole('heading', { name: /upcomming/i }))
    expect(screen.getByRole('heading', { name: /free games/i }))
  })
})
