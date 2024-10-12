'use client'

import React, { createContext, useContext, useState } from 'react'

const translations = {
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

const I18nContext = createContext<{
  t: (key: string) => string
  setLanguage: (lang: string) => void
}>({
  t: () => '',
  setLanguage: () => {},
})

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('da')

  const t = (key: string) => translations[language][key] || key

  return (
    <I18nContext.Provider value={{ t, setLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)