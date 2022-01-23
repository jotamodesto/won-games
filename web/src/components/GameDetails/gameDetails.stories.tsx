import type { Meta, Story } from '@storybook/react/types-6-0'

import mockGame from './mock'
import GameDetails, { GameDetailsProps } from '.'

const meta = {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: { default: 'won-dark' }
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action', 'Adventure']
      }
    }
  }
} as Meta
export default meta

export const Basic: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
