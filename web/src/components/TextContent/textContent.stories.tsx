import type { Meta, Story } from '@storybook/react/types-6-0'

import textMock from './mock'
import TextContent, { TextContentProps } from '.'

const meta = {
  title: 'Game/TextContent',
  component: TextContent,
  parameters: {
    backgrounds: { default: 'won-dark' }
  },
  args: textMock
} as Meta
export default meta

export const Basic: Story<TextContentProps> = args => <TextContent {...args} />
