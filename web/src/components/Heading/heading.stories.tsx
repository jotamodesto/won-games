import type { Meta, Story } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from '.'

const meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta
export default meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

Basic.args = {
  children: 'Most Populars'
}
