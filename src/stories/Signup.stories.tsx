import SignupPage from '@/components/views/Signup.page'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SignupPage> = {
  component: SignupPage,
  title: 'pages/Signup page.',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/IEvwlI8vWH0sM0Hjem2Tns/Auth?node-id=2-6&t=MS6JgKJhkv77h2y5-1',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
