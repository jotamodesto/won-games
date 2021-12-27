import type { Meta, Story } from '@storybook/react/types-6-0'

import FormSignIn from '.'

const meta = {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta
export default meta

export const Basic: Story = args => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
)
