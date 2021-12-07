import * as S from './styles'

type RibbonColors = 'primary' | 'secondary'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: 'normal' | 'small'
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default Ribbon
