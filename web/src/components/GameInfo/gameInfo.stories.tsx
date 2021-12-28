import type { Meta, Story } from '@storybook/react/types-6-0'

import GameInfo from '.'

const meta = {
  title: 'GameInfo',
  component: GameInfo
} as Meta
export default meta

export const Basic: Story = (args) => <GameInfo {...args} />
