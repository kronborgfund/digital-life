'use client'

import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { HeaderComponent } from './header'
import { FooterComponent } from './footer'
import { SafetyPopupComponent } from './safety-popup'
import { CoolNavigationComponent } from './cool-navigation'
import { LanguageProvider } from './language-context'

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [showSafetyPopup, setShowSafetyPopup] = useState(false)


  const toggleSafetyPopup = () => {
    setShowSafetyPopup(!showSafetyPopup)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <HeaderComponent
            onShowSafetyInfo={toggleSafetyPopup}

          />
          <main className="flex-grow container mx-auto px-4 py-8 mt-16">
            <CoolNavigationComponent  >
              {children}
            </CoolNavigationComponent>
          </main>
          <FooterComponent />
          {showSafetyPopup && <SafetyPopupComponent onClose={toggleSafetyPopup} />}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}