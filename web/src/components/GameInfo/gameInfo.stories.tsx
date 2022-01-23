import type { Meta, Story } from '@storybook/react/types-6-0'

import mockGames from './mock'
import GameInfo, { GameInfoProps } from '.'

const meta = {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: { default: 'won-dark' }
  },
  args: mockGames
} as Meta
export default meta

export const Basic: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
