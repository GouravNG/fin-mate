import Login from '@/components/views/Login'
import type { Meta, StoryObj } from '@storybook/react-vite'


const meta: Meta<typeof Login> = {
  component: Login,
  title: 'pages/Login Page',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/MHbuwXECluHRcBg2EOxjRe/UI?node-id=3-2&t=sdCbVlsYxjLi2gnl-4',
    },
  },
}


export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

