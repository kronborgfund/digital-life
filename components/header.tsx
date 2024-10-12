/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from "react"
import { useI18n } from "./i18n-context"

//import { useTheme } from 'next-themes'

export function HeaderComponent({ onShowSafetyInfo }: { onShowSafetyInfo: () => void }) {
  const { t, setLanguage } = useI18n()
  //const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('appName')}</h1>
        <nav>
          <button onClick={onShowSafetyInfo} className="mr-4">
            {t('safetyInfo')}
          </button>
          <select onChange={(e) => setLanguage(e.target.value)} className="bg-primary text-primary-foreground">
            <option value="da">Dansk</option>
            <option value="en">English</option>
          </select>
        </nav>
      </div>
    </header>
  )
}


