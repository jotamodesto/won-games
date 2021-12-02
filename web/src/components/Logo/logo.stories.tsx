import type { Meta, Story } from '@storybook/react/types-6-0'

import Logo, { LogoProps } from '.'

const meta = {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />

export default meta
