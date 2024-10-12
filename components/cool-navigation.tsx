'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Laptop, Briefcase, Users, Smartphone, Database, Lock } from 'lucide-react'
import { useLanguage } from './language-context'
// Define types for the situation object
export interface Situation {
  title: string;
  path: string[];
}

export interface Translations {
  safetyInfo: string;
  ai: string;
  categories: string;
  searchPlaceholder: string;
  personalIT: string;
  workIT: string;
  situations: string;
  devices: string;
  data: string;
  privacy: string;
  languageToggle: string;
  suggestedPath: string;
  startGuide: string;
}

export type Language = 'da' | 'en';
export const translations: Record<Language, Translations> = {
  da: {
    safetyInfo: 'Sikkerhedsinfo',
    categories: 'Kategorier',
    ai: 'AI',
    searchPlaceholder: 'Søg situationer...',
    personalIT: 'Personlig IT',
    workIT: 'Arbejds-IT',
    situations: 'Situationer',
    devices: 'Enheder',
    data: 'Data',
    privacy: 'Privatliv',
    languageToggle: 'Skift til engelsk',
    suggestedPath: 'Foreslået sti:',
    startGuide: 'Start guide',
  },
  en: {
    safetyInfo: 'Safety Info',
    ai: 'AI',
    categories: 'Categories',
    searchPlaceholder: 'Search situations...',
    personalIT: 'Personal IT',
    workIT: 'Work IT',
    situations: 'Situations',
    devices: 'Devices',
    data: 'Data',
    privacy: 'Privacy',
    languageToggle: 'Switch to Danish',
    suggestedPath: 'Suggested path:',
    startGuide: 'Start guide',
  }
}

interface CoolNavigationProps {
  children: React.ReactNode
}
export function CoolNavigationComponent({ children }: CoolNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string>('personal-it')
  const router = useRouter()
  const { language } = useLanguage()

  const t = (key: keyof Translations) => translations[language][key]

  const categories = useMemo(() => [
    { name: t('personalIT'), icon: Laptop, path: "category/personal-it" },
    { name: t('workIT'), icon: Briefcase, path: "category/work-it" },
    { name: t('ai'), icon: Briefcase, path: "category/ai" },
    { name: t('situations'), icon: Users, path: "category/situations" },
    { name: t('devices'), icon: Smartphone, path: "category/devices" },
    { name: t('data'), icon: Database, path: "category/data" },
    { name: t('privacy'), icon: Lock, path: "category/privacy" },
  ], [language, t])

  const handleCategoryClick = (path: string) => {
    setActiveCategory(path)
    router.push(`/${path}`)
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div className="w-64 bg-muted p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-4 text-foreground">{t('categories')}</h2>
        <nav>
          {categories.map((category) => (
            <Button
              key={category.path}
              variant={activeCategory === category.path ? "secondary" : "ghost"}
              className="w-full justify-start mb-2 text-foreground"
              onClick={() => handleCategoryClick(category.path)}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-auto">
        {children}
      </div>
    </div>
  )
}