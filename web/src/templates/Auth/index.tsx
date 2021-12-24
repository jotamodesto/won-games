import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerPanel>
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2021 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerPanel>

      <S.ContentPanel>
        <S.ContentWrapper>
          <Logo color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.ContentPanel>
    </S.Wrapper>
  )
}

export default Auth
