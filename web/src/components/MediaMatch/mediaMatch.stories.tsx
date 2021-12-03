import type { Meta, Story } from '@storybook/react/types-6-0'

import MediaMatch, { MediaMatchProps } from '.'

const meta = {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta
export default meta

export const Basic: Story = (args) => (
  <MediaMatch {...args}>Show none</MediaMatch>
)

export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch up="md">Only on Desktop</MediaMatch>
)

export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch down="md">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
