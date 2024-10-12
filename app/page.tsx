/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useMemo, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Search, ArrowRight } from 'lucide-react'
import { Language, Situation, translations, Translations } from '@/components/cool-navigation'

const situations: Record<Language, Record<string, Situation[]>> = {
  da: {
    'Personlig IT': [
      { title: 'Håndter Apple ID', path: ['Log ind', 'Opdater oplysninger', 'Gennemgå sikkerhed'] },
      { title: 'Opsæt e-mail', path: ['Vælg e-mail-udbyder', 'Opret konto', 'Konfigurer app'] },
      { title: 'Organiser fotos', path: ['Importer fotos', 'Opret albums', 'Brug ansigtsgenkendelse'] },
      { title: 'Backup personlige data', path: ['Vælg backup-metode', 'Konfigurer automatisk backup', 'Verificer backup'] },
    ],
    // More categories...
  },
  en: {
    'Personal IT': [
      { title: 'Manage Apple ID', path: ['Log in', 'Update information', 'Review security'] },
      { title: 'Set up email', path: ['Choose email provider', 'Create account', 'Configure app'] },
      { title: 'Organize photos', path: ['Import photos', 'Create albums', 'Use facial recognition'] },
      { title: 'Backup personal data', path: ['Choose backup method', 'Configure automatic backup', 'Verify backup'] },
    ],
    // More categories...
  }
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('Personlig IT')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<'da' | 'en'>('da')
  const filteredSituations = useMemo(() => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const t = (key: keyof Translations) => translations[language][key]


  }, [language, activeCategory, searchTerm])

  const navigateToSituation = (situation: string) => {
    router.push(`/situation/${encodeURIComponent(situation)}?lang=${language}`)
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div>z</div>
  );
}
