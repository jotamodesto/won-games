import type { Meta, Story } from '@storybook/react/types-6-0'

import items from './mock'
import Gallery, { GalleryProps } from '.'

const meta = {
  title: 'Gallery',
  component: Gallery,
  args: { items },
  parameters: {
    layout: 'Fullscreen',
    backgrounds: { default: 'won-dark' }
  }
} as Meta
export default meta

export const Basic: Story<GalleryProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
