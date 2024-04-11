"use client"

import { useState } from "react"
import { Check, CircleSlashIcon, LanguagesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import languagesJson from "@/json/languages.json"
import languageProps from "@/interface/language-props"


export function LanguageToggle() {
    const [languages, setLanguages] = useState<languageProps[]>(languagesJson)

    const handleActiveLanguage = (idx: number) => {
        setLanguages(prevState => prevState.map((t, index) => {
            return { ...t, active: index === idx }
        }))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
                    <LanguagesIcon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((language, idx) => (
                    <DropdownMenuItem
                    key={idx}
                    className="flex justify-between items-center gap-2"
                    disabled={language.disabled}
                    onClick={() => handleActiveLanguage(idx)}>
                        {language.label}
                        {language.active ?
                            <Check className="w-4 h-4" /> :
                            null
                        }
                        {language.disabled ?
                            <CircleSlashIcon className="w-4 h-4" /> :
                            null}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
