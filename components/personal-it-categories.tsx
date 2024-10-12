"use client"
import { useLanguage } from '@/components/language-context'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Laptop, Smartphone, Wifi, Shield, Cloud, HardDrive } from "lucide-react"

const translations = {
  da: {
    pageTitle: 'Personlig IT-kategorier',
    computers: {
      title: 'Computere',
      description: 'Lær om computere og deres anvendelse',
    },
    smartphones: {
      title: 'Smartphones',
      description: 'Udforsk smartphone-funktioner og apps',
    },
    internet: {
      title: 'Internet',
      description: 'Forstå internettet og webbrowsing',
    },
    security: {
      title: 'Sikkerhed',
      description: 'Lær om online sikkerhed og databeskyttelse',
    },
    cloudServices: {
      title: 'Cloud-tjenester',
      description: 'Udforsk cloud-lagring og -applikationer',
    },
    backup: {
      title: 'Backup',
      description: 'Lær om vigtigheden af databackup',
    },
  },
  en: {
    pageTitle: 'Personal IT Categories',
    computers: {
      title: 'Computers',
      description: 'Learn about computers and their usage',
    },
    smartphones: {
      title: 'Smartphones',
      description: 'Explore smartphone features and apps',
    },
    internet: {
      title: 'Internet',
      description: 'Understand the internet and web browsing',
    },
    security: {
      title: 'Security',
      description: 'Learn about online security and data protection',
    },
    cloudServices: {
      title: 'Cloud Services',
      description: 'Explore cloud storage and applications',
    },
    backup: {
      title: 'Backup',
      description: 'Learn about the importance of data backup',
    },
  },
}

type TranslationKey = keyof typeof translations.en
type CategoryKey = Exclude<TranslationKey, 'pageTitle'>

const categories: { id: CategoryKey; icon: React.ReactNode }[] = [
  { id: 'computers', icon: <Laptop className="w-8 h-8 mb-2" /> },
  { id: 'smartphones', icon: <Smartphone className="w-8 h-8 mb-2" /> },
  { id: 'internet', icon: <Wifi className="w-8 h-8 mb-2" /> },
  { id: 'security', icon: <Shield className="w-8 h-8 mb-2" /> },
  { id: 'cloudServices', icon: <Cloud className="w-8 h-8 mb-2" /> },
  { id: 'backup', icon: <HardDrive className="w-8 h-8 mb-2" /> },
]

export default function PersonalITCategories() {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string | { title: string; description: string } => translations[language][key]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {t('pageTitle') as string}
      </h1>
      <div className="flex flex-wrap space-x-2 space-y-2">
        {categories.map((category) => {
          const { title, description } = t(category.id) as { title: string; description: string }
          return (
            <Card key={category.id} className="hover:shadow-lg transition-shadow duration-300 min-w-96">
              <CardHeader className="text-center">
                {category.icon}
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}