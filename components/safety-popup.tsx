'use client'

import { useI18n } from "./i18n-context"



export function SafetyPopupComponent({ onClose }: { onClose: () => void }) {
  const { t } = useI18n()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-background text-foreground rounded-lg p-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">{t('safetyTitle')}</h2>
        <p className="mb-4">{t('safetyDescription')}</p>
        <ul className="list-disc list-inside mb-4">
          <li>{t('safetyPoint1')}</li>
          <li>{t('safetyPoint2')}</li>
          <li>{t('safetyPoint3')}</li>
        </ul>
        <button onClick={onClose} className="bg-primary text-primary-foreground px-4 py-2 rounded">
          {t('close')}
        </button>
      </div>
    </div>
  )
}