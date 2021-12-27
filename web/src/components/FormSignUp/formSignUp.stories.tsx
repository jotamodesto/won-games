import type { Meta, Story } from '@storybook/react/types-6-0'

import FormSignUp from '.'

const meta = {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta
export default meta

export const Basic: Story = args => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
)
