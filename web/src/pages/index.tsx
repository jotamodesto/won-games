import type { NextPage } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

import banners from 'components/BannerSlider/mock'
import newGames from 'components/GameCardSlider/mock'
import mostPopularHighlight from 'components/Highlight/mock'

const Index: NextPage<HomeTemplateProps> = props => {
  return <Home {...props} />
}

export const getServerSideProps = () => {
  return {
    props: {
      banners,
      newGames,
      mostPopularHighlight,
      mostPopularGames: newGames,
      upcommingGames: newGames,
      upcommingHihghlight: mostPopularHighlight,
      upcommingMoreGames: newGames,
      freeGames: newGames,
      freeHighlight: mostPopularHighlight
    }
  }
}

export default Index
