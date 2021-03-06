import {
  AddShoppingCart,
  FavoriteBorder
} from '@emotion-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button icon={<FavoriteBorder />} size="large" showType="text">
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
