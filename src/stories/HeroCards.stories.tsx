import type { Meta, StoryObj } from "@storybook/react-vite"
import HeroCard from "@/components/HeroCards"
import type { THeroCard } from "@/types/component.types"

const meta: Meta<typeof HeroCard> = {
  component: HeroCard,
  title: "Components/HeroCards",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof meta>

const baseArgs: THeroCard = {
  totalBalance: 12500.5,
  trendPercent: 12,
  categories: [
    {
      categoryName: "Shopping",
      categoryImgSrc:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Shopping",
    },
    {
      categoryName: "Food",
      categoryImgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Food",
    },
    {
      categoryName: "Transport",
      categoryImgSrc:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Transport",
    },
    {
      categoryName: "Entertainment",
      categoryImgSrc:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Entertainment",
    },
  ],
}

export const Default: Story = {
  args: baseArgs,
}

export const LargeBalance: Story = {
  args: {
    ...baseArgs,
    totalBalance: 95000.75,
    trendPercent: 25,
  },
}

export const SmallBalance: Story = {
  args: {
    ...baseArgs,
    totalBalance: 1250.25,
    trendPercent: 5,
  },
}

export const TwoCategories: Story = {
  args: {
    ...baseArgs,
    categories: baseArgs.categories.slice(0, 2),
  },
}

export const SingleCategory: Story = {
  args: {
    ...baseArgs,
    categories: baseArgs.categories.slice(0, 1),
  },
}

export const ManyCategories: Story = {
  args: {
    ...baseArgs,
    categories: [
      ...baseArgs.categories,
      {
        categoryName: "Utilities",
        categoryImgSrc:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=Utilities",
      },
      {
        categoryName: "Health",
        categoryImgSrc:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=Health",
      },
    ],
  },
}

export const HighGrowth: Story = {
  args: {
    ...baseArgs,
    trendPercent: 45,
  },
}
