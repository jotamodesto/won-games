import type { Meta, Story } from '@storybook/react/types-6-0'

import Menu, { MenuProps } from '.'

const meta = {
  title: 'Menu',
  component: Menu
} as Meta
export default meta

export const Basic: Story<MenuProps> = args => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
