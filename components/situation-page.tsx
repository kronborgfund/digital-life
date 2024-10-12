'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from 'lucide-react'

export function SituationPage() {
  const router = useRouter()
  const { situation, lang } = router.query
  const [language, setLanguage] = useState<'da' | 'en'>(lang as 'da' | 'en' || 'da')
  const [currentStep, setCurrentStep] = useState(0)

  const translations = {
    da: {
      back: 'Tilbage',
      nextStep: 'Næste trin',
      complete: 'Afslut guide',
    },
    en: {
      back: 'Back',
      nextStep: 'Next step',
      complete: 'Complete guide',
    }
  }

  const t = (key: keyof typeof translations.da) => translations[language][key]

  const situations = {
    da: {
      'Håndter Apple ID': {
        steps: [
          { title: 'Log ind', content: 'Gå til appleid.apple.com og log ind med dit Apple ID og adgangskode.' },
          { title: 'Opdater oplysninger', content: 'Gennemgå og opdater dine personlige oplysninger, herunder navn, e-mail og telefonnummer.' },
          { title: 'Gennemgå sikkerhed', content: 'Tjek dine sikkerhedsindstillinger, herunder to-faktor-autentificering og gendannelsesmuligheder.' },
        ]
      },
      // Add other situations here...
    },
    en: {
      'Manage Apple ID': {
        steps: [
          { title: 'Log in', content: 'Go to appleid.apple.com and sign in with your Apple ID and password.' },
          { title: 'Update information', content: 'Review and update your personal information, including name, email, and phone number.' },
          { title: 'Review security', content: 'Check your security settings, including two-factor authentication and recovery options.' },
        ]
      },
      // Add other situations here...
    }
  }

  useEffect(() => {
    if (lang) {
      setLanguage(lang as 'da' | 'en')
    }
  }, [lang])

  const currentSituation = situations[language][situation as string]

  const handleNext = () => {
    if (currentStep < currentSituation.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleComplete = () => {
    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" onClick={() => router.push('/')} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('back')}
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>{situation}</CardTitle>
        </CardHeader>
        <CardContent>
          {currentSituation.steps.map((step, index) => (
            <div key={index} className={`mb-4 ${index > currentStep ? 'opacity-50' : ''}`}>
              <h3 className="text-lg font-semibold flex items-center">
                {index <= currentStep && <CheckCircle className="mr-2 h-4 w-4 text-green-500" />}
                {step.title}
              </h3>
              <p>{step.content}</p>
            </div>
          ))}
          
          {currentStep < currentSituation.steps.length - 1 ? (
            <Button onClick={handleNext}>{t('nextStep')}</Button>
          ) : (
            <Button onClick={handleComplete}>{t('complete')}</Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}