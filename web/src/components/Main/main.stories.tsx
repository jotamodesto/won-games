import type { Meta, Story } from '@storybook/react/types-6-0'

import Main, { MainProps } from '.'

const meta = {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate setup'
  },
  argTypes: {
    title: { control: { type: 'text' } }
  }
} as Meta
export default meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />
