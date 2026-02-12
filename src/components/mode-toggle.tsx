import { Moon, Sun, Monitor } from "lucide-react"
import { usePreferenceStore, type TTheme } from "@/hooks/use-preference-store"
import { Button } from "./ui/button"

export const ModeToggle = () => {
    const { theme, setTheme } = usePreferenceStore()

    const toggleTheme = () => {
        const themes: TTheme[] = ["light", "dark", "system"]
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        setTheme(themes[nextIndex])
    }

    const Icon = () => {
        switch (theme) {
            case "light":
                return <Sun className="h-5 w-5" />
            case "dark":
                return <Moon className="h-5 w-5" />
            default:
                return <Monitor className="h-5 w-5" />
        }
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full bg-slate-100 dark:bg-slate-800 border"
            title={`Current theme: ${theme}. Click to cycle.`}
        >
            <Icon />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
