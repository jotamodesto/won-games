import type { BannerProps } from 'components/Banner'
import type { GameCardProps } from 'components/GameCard'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import type { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHihghlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHihghlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
        sliderColor="white"
      />

      <S.SectionUpcomming>
        <Showcase title="Upcoming" games={upcommingGames} sliderColor="white" />
        <Showcase
          highlight={upcommingHihghlight}
          games={upcommingMoreGames}
          sliderColor="white"
        />
      </S.SectionUpcomming>

      <Showcase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
        sliderColor="white"
      />
    </Base>
  )
}

export default Home
