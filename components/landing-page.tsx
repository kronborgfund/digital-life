"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, LifeBuoy, Laptop, Shield } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-context'

const translations = {
  da: {
    welcomeTitle: 'Velkommen til Lenes IT',
    welcomeSubtitle: 'Din guide til at navigere i den digitale verden',
    exploreGuides: 'Udforsk vores guides',
    aboutTitle: 'Om Lenes IT',
    aboutDescription: 'Lenes IT er skabt for at hjælpe alle med at mestre deres digitale liv, uanset deres tekniske færdigheder eller baggrund.',
    aboutMission: 'Vores mission er at give dig de værktøjer og den viden, du har brug for, for at føle dig sikker og kompetent i den digitale verden.',
    howItWorksTitle: 'Sådan fungerer det',
    globalAccessTitle: 'Global adgang',
    globalAccessDescription: 'Vores guides er tilgængelige for alle, overalt i verden, på flere sprog.',
    lifeEventsTitle: 'Livsbegivenheder',
    lifeEventsDescription: 'Vi dækker en bred vifte af situationer, fra at oprette en e-mailkonto til at håndtere digital arv.',
    deviceGuidesTitle: 'Enhedsguides',
    deviceGuidesDescription: 'Lær at bruge dine enheder effektivt, hvad enten det er til personlig brug eller arbejde.',
    privacySecurityTitle: 'Privatliv og sikkerhed',
    privacySecurityDescription: 'Få tips og tricks til at beskytte dine personlige oplysninger og holde dine enheder sikre.',
    startJourneyTitle: 'Start din rejse',
    startJourneyDescription: 'Uanset hvor du er i din digitale rejse, har vi en guide til dig.',
    getStarted: 'Kom i gang',
  },
  en: {
    welcomeTitle: 'Welcome to Lenes IT',
    welcomeSubtitle: 'Your guide to navigating the digital world',
    exploreGuides: 'Explore our guides',
    aboutTitle: 'About Lenes IT',
    aboutDescription: 'Lenes IT is created to help everyone master their digital lives, regardless of their technical skills or background.',
    aboutMission: 'Our mission is to provide you with the tools and knowledge you need to feel confident and competent in the digital world.',
    howItWorksTitle: 'How It Works',
    globalAccessTitle: 'Global Access',
    globalAccessDescription: 'Our guides are available to everyone, anywhere in the world, in multiple languages.',
    lifeEventsTitle: 'Life Events',
    lifeEventsDescription: 'We cover a wide range of situations, from setting up an email account to managing digital inheritance.',
    deviceGuidesTitle: 'Device Guides',
    deviceGuidesDescription: 'Learn to use your devices effectively, whether for personal use or work.',
    privacySecurityTitle: 'Privacy & Security',
    privacySecurityDescription: 'Get tips and tricks to protect your personal information and keep your devices secure.',
    startJourneyTitle: 'Start Your Journey',
    startJourneyDescription: 'No matter where you are in your digital journey, we have a guide for you.',
    getStarted: 'Get Started',
  },
}

type TranslationKey = keyof typeof translations.en

export function LandingPage() {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => translations[language][key]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('welcomeTitle')}</h1>
        <p className="text-xl mb-6">{t('welcomeSubtitle')}</p>
        <Button asChild>
          <Link href="/guides">{t('exploreGuides')}</Link>
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t('aboutTitle')}</h2>
        <p className="mb-4">{t('aboutDescription')}</p>
        <p>{t('aboutMission')}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">{t('howItWorksTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('globalAccessTitle')}</h3>
              <p>{t('globalAccessDescription')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <LifeBuoy className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('lifeEventsTitle')}</h3>
              <p>{t('lifeEventsDescription')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Laptop className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('deviceGuidesTitle')}</h3>
              <p>{t('deviceGuidesDescription')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 mb-4 mx-auto text-primary" />
              <h3 className="text-xl font-semibold mb-2">{t('privacySecurityTitle')}</h3>
              <p>{t('privacySecurityDescription')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">{t('startJourneyTitle')}</h2>
        <p className="mb-6">{t('startJourneyDescription')}</p>
        <Button asChild>
          <Link href="/guides">{t('getStarted')}</Link>
        </Button>
      </section>
    </div>
  )
}