'use client'

import React, { createContext, useContext, useState } from 'react'

// Define types for the translations
export interface Translations {
  appName: string;
  safetyInfo: string;
  footerText: string;
  safetyTitle: string;
  safetyDescription: string;
  safetyPoint1: string;
  safetyPoint2: string;
  safetyPoint3: string;
  close: string;
}

// Define a type for the available languages
export type Language = 'da' | 'en';

// Define the translations object with proper typing
const translations: Record<Language, Translations> = {
  da: {
    appName: 'Lenes IT',
    safetyInfo: 'Sikkerhedsinfo',
    footerText: '© 2024 Lenes IT. Alle rettigheder forbeholdes.',
    safetyTitle: 'Sikkerhed og Privatliv',
    safetyDescription: 'Vores løsning er designet med din sikkerhed og privatliv i tankerne:',
    safetyPoint1: 'Alt kører på klientsiden - ingen data sendes til servere.',
    safetyPoint2: 'Vi tracker ikke din aktivitet eller gemmer personlige oplysninger.',
    safetyPoint3: 'Din data forbliver på din enhed og slettes når du lukker appen.',
    close: 'Luk',
  },
  en: {
    appName: 'Lenes IT',
    safetyInfo: 'Safety Info',
    footerText: '© 2024 Lenes IT. All rights reserved.',
    safetyTitle: 'Safety and Privacy',
    safetyDescription: 'Our solution is designed with your safety and privacy in mind:',
    safetyPoint1: 'Everything runs client-side - no data is sent to servers.',
    safetyPoint2: 'We don\'t track your activity or store personal information.',
    safetyPoint3: 'Your data remains on your device and is deleted when you close the app.',
    close: 'Close',
  },
}

// Define the context type
interface I18nContextProps {
  t: (key: keyof Translations) => string;
  setLanguage: (lang: Language) => void;
}

// Create the context with default values
const I18nContext = createContext<I18nContextProps>({
  t: () => '',
  setLanguage: () => { },
})

// Provider component
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('da')

  const t = (key: keyof Translations) => translations[language][key]

  return (
    <I18nContext.Provider value={{ t, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

// Custom hook to use the i18n context
export const useI18n = () => useContext(I18nContext)
