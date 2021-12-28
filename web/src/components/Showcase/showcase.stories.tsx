import type { Meta, Story } from '@storybook/react/types-6-0'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import Showcase, { ShowcaseProps } from '.'

const meta = {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    Story => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta
export default meta

export const Basic: Story<ShowcaseProps> = args => <Showcase {...args} />

Basic.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const NoHighlight: Story<ShowcaseProps> = args => <Showcase {...args} />

NoHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const NoGame: Story<ShowcaseProps> = args => <Showcase {...args} />

NoGame.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
