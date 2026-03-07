import type { Meta, StoryObj } from '@storybook/react-vite'

import { UserCardList } from './UserCard'
import type { TCard } from '@/types'

const meta = {
  component: UserCardList,
  parameters: {
    layout: 'centered',
  },
  title: 'components/User Card List',
  tags: ['autodocs'],
} satisfies Meta<typeof UserCardList>

export default meta

type Story = StoryObj<typeof meta>

const defautDataArgs: { data: TCard[] } = {
  data: [
    {
      cardTitle: 'icici bank',
      cardBrand: 'Visa',
      cardHolderName: 'Gourav N Gunaga',
      cardNumber: '4111-1111-1111-1111',
      cardtype: 'credit',
      expiryDate: '02/28',
      id: 923030,
      transaction: '123123',
    },
    {
      cardTitle: 'axis bank',
      cardBrand: 'Visa',
      cardHolderName: 'Gourav N Gunaga',
      cardNumber: '4111-1111-1111-1111',
      cardtype: 'debit',
      expiryDate: '02/28',
      id: 923030,
      transaction: '123123',
    },
  ],
}

export const Default: Story = {
  args: { ...defautDataArgs, isLoading: false },
}

export const LoadingCards: Story = {
  args: { ...defautDataArgs, isLoading: true },
}

export const NoCards: Story = {
  args: { data: [], isLoading: false },
}
export const ErrorCards: Story = {
  args: { data: [], isLoading: false, isError: true },
}
