import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type THeader = {
  username: string
  //   notifications: string[]
}

const Header: React.FC<THeader> = ({ username }) => {
  return (
    <header className="flex items-center justify-between mb-4">
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
      <div className="flex justify-end">
        <span className="bg-slate-100 border rounded-full p-2">
          <Bell fill="#000" />
        </span>
      </div>
    </header>
  )
}
export default Header
