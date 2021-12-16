import Head from 'next/head'
import SlickSlider, { Settings } from 'react-slick'
import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  )
}

export default Slider
