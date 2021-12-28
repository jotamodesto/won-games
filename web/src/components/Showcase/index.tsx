import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  sliderColor?: GameCardSliderProps['color']
}

const Showcase = ({ title, highlight, games, sliderColor }: ShowcaseProps) => {
  return (
    <S.Wrapper as="section">
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} color={sliderColor} />}
    </S.Wrapper>
  )
}

export default Showcase
