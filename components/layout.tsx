'use client'

import { useState } from 'react'
import { I18nProvider } from './i18n-context'
import { HeaderComponent } from './header'
import { FooterComponent } from './footer'
import { SafetyPopupComponent } from './safety-popup'
import { CoolNavigationComponent } from './cool-navigation'

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [showSafetyPopup, setShowSafetyPopup] = useState(false)

  const toggleSafetyPopup = () => {
    setShowSafetyPopup(!showSafetyPopup)
  }

  return (
    <I18nProvider>
      <div className="flex flex-col min-h-screen">
        <HeaderComponent onShowSafetyInfo={toggleSafetyPopup} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <CoolNavigationComponent>
            {children}</CoolNavigationComponent>
        </main>
        <FooterComponent />
        {showSafetyPopup && <SafetyPopupComponent onClose={toggleSafetyPopup} />}
      </div>
    </I18nProvider>
  )
}