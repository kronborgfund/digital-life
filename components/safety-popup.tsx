'use client'

import React from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useLanguage } from './language-context'

interface SafetyPopupProps {
  onClose: () => void
}

const translations = {
  da: {
    safetyTitle: 'Sikkerhed og Privatliv',
    safetyDescription: 'Vores løsning er designet med din sikkerhed og privatliv i tankerne:',
    safetyPoint1: 'Alt kører på klientsiden - ingen data sendes til servere.',
    safetyPoint2: 'Vi tracker ikke din aktivitet eller gemmer personlige oplysninger.',
    safetyPoint3: 'Din data forbliver på din enhed og slettes når du lukker appen.',
    close: 'Luk',
  },
  en: {
    safetyTitle: 'Safety and Privacy',
    safetyDescription: 'Our solution is designed with your safety and privacy in mind:',
    safetyPoint1: 'Everything runs client-side - no data is sent to servers.',
    safetyPoint2: 'We don\'t track your activity or store personal information.',
    safetyPoint3: 'Your data remains on your device and is deleted when you close the app.',
    close: 'Close',
  },
}

type TranslationKey = keyof typeof translations.en

export function SafetyPopupComponent({ onClose }: SafetyPopupProps) {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => translations[language][key]

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{t('safetyTitle')}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{t('safetyDescription')}</p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t('safetyPoint1')}</li>
            <li>{t('safetyPoint2')}</li>
            <li>{t('safetyPoint3')}</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={onClose}>{t('close')}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}