import Header from '@/components/header'
import type { THeader } from '@/types'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta

const baseArgs: THeader = {
  avatar: 'https://github.com/evilrabbit.png',
  notifications: [],
  username: 'Gourav',
  userNameShortForm: 'GO',
}

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: baseArgs,
}

export const AvatarFallback: Story = {
  args: { ...baseArgs, avatar: undefined },
}
export const WithNotification: Story = {
  args: { ...baseArgs, notifications: ['notification1', 'notification2'] },
}
