import { navigationData } from "./data/navigation.data"
import { Link } from "@tanstack/react-router"

const Navigation = () => {
  return (
    <nav className="fixed sm:relative bottom-0 bg-slate-50 border-t sm:border-0 w-full sm:w-auto">
      <ul className="bg-slate-100 md:h-screen flex sm:block items-center justify-around">
        {navigationData.map((n, k) => {
          return (
            <li key={n.title + k}>
              <Link to={n.href}>
                <span
                  title={n.title}
                  className="flex flex-col items-center justify-center p-2"
                >
                  <n.icon className="p-2 shrink-0 w-10 h-10" />
                  <span className="sm:hidden text-sm">{n.title}</span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navigation
