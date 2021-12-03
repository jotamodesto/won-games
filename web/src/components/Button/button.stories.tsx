import type { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@emotion-icons/material-outlined'

import Button, { ButtonProps } from '.'

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta
export default meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Buy now'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
