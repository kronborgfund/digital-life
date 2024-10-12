'use client'

import { useI18n } from "./i18n-context"



export function FooterComponent() {
  const { t } = useI18n()

  return (
    <footer className="bg-muted text-muted-foreground p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>{t('footerText')}</p>
      </div>
    </footer>
  )
}