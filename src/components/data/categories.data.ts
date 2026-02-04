import {
  ShoppingCart,
  Utensils,
  Bus,
  Film,
  HeartPulse,
  Home,
  Lightbulb,
  Briefcase,
  TrendingUp,
  Gift,
} from "lucide-react"

export const categoriesData = [
  {
    id: "food",
    title: "Food & Dining",
    icon: Utensils,
    type: "expense",
  },
  {
    id: "shopping",
    title: "Shopping",
    icon: ShoppingCart,
    type: "expense",
  },
  {
    id: "transport",
    title: "Transport",
    icon: Bus,
    type: "expense",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: Film,
    type: "expense",
  },
  {
    id: "health",
    title: "Health",
    icon: HeartPulse,
    type: "expense",
  },
  {
    id: "utilities",
    title: "Utilities",
    icon: Lightbulb,
    type: "expense",
  },
  {
    id: "rent",
    title: "Rent / Housing",
    icon: Home,
    type: "expense",
  },
  {
    id: "salary",
    title: "Salary",
    icon: Briefcase,
    type: "income",
  },
  {
    id: "freelance",
    title: "Freelance",
    icon: TrendingUp,
    type: "income",
  },
  {
    id: "gifts",
    title: "Gifts",
    icon: Gift,
    type: "income",
  },
]
