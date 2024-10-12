'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Laptop, Briefcase, Users, Smartphone, Database, Lock } from 'lucide-react'

// Define types for the situation object
export interface Situation {
  title: string;
  path: string[];
}

export interface Translations {
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

export function CoolNavigationComponent({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string>('personal-it')
  const [language, setLanguage] = useState<Language>('da')
  const router = useRouter()

  const t = (key: keyof Translations) => translations[language][key]

  const categories = useMemo(() => [
    { name: t('personalIT'), icon: Laptop, path: "personal-it" },
    { name: t('workIT'), icon: Briefcase, path: "work-it" },
    { name: t('ai'), icon: Briefcase, path: "ai" },
    { name: t('situations'), icon: Users, path: "situations" },
    { name: t('devices'), icon: Smartphone, path: "devices" },
    { name: t('data'), icon: Database, path: "data" },
    { name: t('privacy'), icon: Lock, path: "privacy" },
  ], [language, t])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'da' ? 'en' : 'da')
    setActiveCategory('personal-it')
  }

  const handleCategoryClick = (path: string) => {
    setActiveCategory(path)
    router.push(`/${path}`)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-muted p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">{t('categories')}</h2>
        <nav>
          {categories.map((category) => (
            <Button
              key={category.path}
              variant={activeCategory === category.path ? "secondary" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => handleCategoryClick(category.path)}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </nav>
        <div className="mt-4 flex items-center space-x-2">
          <Switch id="language-toggle" onCheckedChange={toggleLanguage} />
          <Label htmlFor="language-toggle">{t('languageToggle')}</Label>
        </div>
      </div>

      {/* Main content */}
      {children}
    </div>
  )
}