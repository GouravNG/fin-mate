import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ModeToggle } from "./mode-toggle"

type THeader = {
  username: string
  //   notifications: string[]
}

const Header: React.FC<THeader> = ({ username }) => {
  return (
    <header className="flex items-center justify-between mb-4 p-2">
      <div className="flex items-center justify-center space-x-2">
        <div className="pr-2">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>GG</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-slate-600">Good Morning</p>
          <p className="font-semibold text-lg">{username}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <span className="bg-slate-100 dark:bg-slate-800 border rounded-full p-2">
          <Bell />
        </span>
      </div>
    </header>
  )
}
export default Header
