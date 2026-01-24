import { navigationData } from "./data/navigation.data"
import { Link } from "@tanstack/react-router"

const Navigation = () => {
  return (
    <>
      <nav className="fixed bottom-0 bg-slate-50 border-t w-full">
        <ul className="flex items-center justify-around">
          {navigationData.map((n, k) => {
            return (
              <li key={n.title + k}>
                <Link to={n.href}>
                  <span className="flex flex-col items-center justify-center p-2">
                    <n.icon />
                    {n.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
export default Navigation
