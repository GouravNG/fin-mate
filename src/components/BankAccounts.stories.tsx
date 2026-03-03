import type { Meta, StoryObj } from '@storybook/react-vite'

import { BankAccounts } from './BankAccounts'
import type { TBankAccounts } from '@/types'

const meta = {
  component: BankAccounts,
  title: 'components/Bank Accounts',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/ikGj4sn3GQ9y4Dd0XreDL3/Account---Card?node-id=0-1&t=6WfNbKxL6kbsfPw4-1',
    },
  },
} satisfies Meta<typeof BankAccounts>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs: TBankAccounts = {
  data: [
    {
      balance: 10000,
      bankName: 'axis bank',
      last4Digits: '9020',
    },
    {
      balance: 20000,
      bankName: 'icici bank',
      last4Digits: '9202',
    },
  ],
}

export const Default: Story = {
  args: defaultArgs,
}
