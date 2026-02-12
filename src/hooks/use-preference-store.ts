import { create } from "zustand"
import { persist } from "zustand/middleware"

export type TTheme = "light" | "dark" | "system"

interface PreferenceState {
    theme: TTheme
    setTheme: (theme: TTheme) => void
}

export const usePreferenceStore = create<PreferenceState>()(
    persist(
        (set) => ({
            theme: "system",
            setTheme: (theme) => set({ theme }),
        }),
        {
            name: "fin-mate-preferences",
        },
    ),
)
