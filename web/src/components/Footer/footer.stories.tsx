import type { Meta, Story } from '@storybook/react/types-6-0'

import Footer from '.'

const meta = {
  title: 'Footer',
  component: Footer
} as Meta
export default meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
