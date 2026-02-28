import type { Meta, StoryObj } from '@storybook/react-vite'

import DyanamicHeader from './DyanamicHeader'
import type { TDynamicHeader } from '@/types'
import { PlusIcon, Search } from 'lucide-react'
import { Button } from './ui/button'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

const meta = {
  component: DyanamicHeader,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/ikGj4sn3GQ9y4Dd0XreDL3/Account---Card?node-id=1-466&t=qHigRp8w8yDZNHno-4',
    },
  },
} satisfies Meta<typeof DyanamicHeader>

export default meta

type Story = StoryObj<typeof meta>

const CreateAccountBtn = () => {
  return (
    <Button>
      <PlusIcon />
      Add New Account
    </Button>
  )
}

const defaultArg: TDynamicHeader = {
  title: 'Accounts & Cards',
  description: 'manage your accounts and cards',
  backFn: () => console.log('User clicked the back button'),
  utilityIcon: Search,
  utilityFn: () => console.log('User clicked the utility button'),
  children: <CreateAccountBtn />,
}

export const Default: Story = {
  args: defaultArg,
}

// without description
export const WihoutDescription: Story = {
  args: { ...defaultArg, description: undefined },
}

// without utility icon
export const WithoutUtilityIcon: Story = {
  args: { ...defaultArg, utilityIcon: undefined },
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
}

//without chilren
export const WithoutChildren: Story = {
  args: { ...defaultArg, children: undefined },
}
