import * as S from './styles'

export type MainProps = {
  title: string
}

const Main = ({ title }: MainProps) => {
  return (
    <S.Main>
      <h1>{title}</h1>
    </S.Main>
  )
}

export default Main
