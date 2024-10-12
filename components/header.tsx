'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/components/language-context'
import { translations } from './cool-navigation'
import Link from 'next/link'
import FeedbackButton from './feedback-button'

interface HeaderProps {
  onShowSafetyInfo: () => void
}

export function HeaderComponent({ onShowSafetyInfo }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const t = (key: keyof typeof translations.da) => translations[language][key]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'da' ? 'en' : 'da')
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <header className={`border-b fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${scrolled ? 'h-12' : 'h-16'
      }`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/chef-logo.svg"
            alt="Logo"
            className={`mr-2 transition-all duration-200 ${scrolled ? 'h-6 w-6' : 'h-8 w-8'
              }`}
          />
          <h1 className={`font-bold transition-all duration-200 ${scrolled ? 'text-lg' : 'text-xl'
            }`}>
            Lenes IT
          </h1>
        </Link>

        <div className="flex items-center space-x-4 ">
          <Button variant="ghost" size="sm" onClick={onShowSafetyInfo}>
            {t('safetyInfo')}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            {language === 'da' ? 'EN' : 'DA'}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <FeedbackButton />
        </div>
      </div>
    </header>
  )
}