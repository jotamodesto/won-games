import type { Meta, Story } from '@storybook/react/types-6-0'

import Ribbon, { RibbonProps } from '.'

const meta = {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta
export default meta

export const Basic: Story<RibbonProps> = args => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
