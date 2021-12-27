import type { Meta, Story } from '@storybook/react/types-6-0'

import Showcase from '.'

const meta = {
  title: 'Showcase',
  component: Showcase
} as Meta
export default meta

export const Basic: Story = (args) => <Showcase {...args} />
