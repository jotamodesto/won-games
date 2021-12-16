import styled from '@emotion/styled'
import type { Meta, Story } from '@storybook/react/types-6-0'

import Slider, { SliderProps, SliderSettings } from '.'

const meta = {
  title: 'Slider',
  component: Slider
} as Meta
export default meta

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: SliderSettings = {
  dots: true,
  vertical: true,
  verticalSwiping: true,
  infinite: false
}

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
