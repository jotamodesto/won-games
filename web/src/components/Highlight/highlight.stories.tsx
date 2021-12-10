import type { Meta, Story } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

const meta = {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpeg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  }
} as Meta
export default meta

export const Basic: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
