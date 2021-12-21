import type { BannerProps } from 'components/Banner'
import type { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'
import Highlight, { HighlightProps } from 'components/Highlight'
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
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>

          <GameCardSlider items={newGames} />
        </Container>
      </S.SectionNews>

      <S.SectionMostPopular>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} color="white" />
        </Container>
      </S.SectionMostPopular>

      <S.SectionUpcomming>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>

          <GameCardSlider items={upcommingGames} color="white" />
          <Highlight {...upcommingHihghlight} />
          <GameCardSlider items={upcommingMoreGames} color="white" />
        </Container>
      </S.SectionUpcomming>

      <S.SectionFreeGames>
        <Container>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} color="white" />
        </Container>
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
