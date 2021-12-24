import type { Meta, Story } from '@storybook/react/types-6-0'
import { Email } from '@emotion-icons/material-outlined/Email'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'email',
    initialValue: '',
    icon: <Email />,
    placeholder: 'john@doe.com'
  },
  argTypes: {
    icon: { type: 'symbol' },
    onInput: { action: 'changed' }
  }
} as Meta

export const Basic: Story = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Something Wrong'
}
