"use client"

import { CheckIcon, MoonIcon, SunIcon, GuitarIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import themeProps from "@/interface/theme-props"
import themesJson from "@/json/themes.json"

export function ThemeToggle() {
    const { setTheme } = useTheme()

    const [themes, setThemes] = useState<themeProps[]>(themesJson)

    const handleActiveTheme = (theme: string, idx: number) => {
        setTheme(theme)
        setThemes(prevState => prevState.map((t, index) => {
            return { ...t, active: index === idx }
        }))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    {/* <GuitarIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {themes.map((theme, idx) => (
                    <DropdownMenuItem
                        key={idx}
                        disabled={theme.disabled}
                        className="flex justify-between items-center"
                        onClick={() => handleActiveTheme(theme.value, idx)}>
                        {theme.label}
                        {theme.active ?
                            <CheckIcon className="w-4 h-4" /> :
                            null
                        }
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
