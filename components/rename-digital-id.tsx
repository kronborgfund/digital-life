'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, XCircle } from 'lucide-react'

export function RenameDigitalIdComponent() {
  const [option, setOption] = useState<'rename' | 'new'>('rename')

  const t = (key: string) => {
    const translations = {
      title: 'Overtagelse af Apple ID eller oprettelse af nyt',
      description: 'Vælg mellem at omdøbe et eksisterende Apple ID eller oprette et helt nyt.',
      optionRename: 'Omdøb eksisterende Apple ID',
      optionNew: 'Opret nyt Apple ID',
      stepsTitle: 'Sådan gør du',
      prosTitle: 'Fordele',
      consTitle: 'Ulemper',
      confirmButton: 'Fortsæt med valgte mulighed',
      renameSteps: [
        'Gå til appleid.apple.com og log ind med det eksisterende Apple ID.',
        'Klik på "Rediger" i sektionen "Kontooplysninger".',
        'Ændr navn og e-mail til dine egne oplysninger.',
        'Gem ændringerne og bekræft via den nye e-mail.',
        'Vent 24 timer på, at systemerne opdaterer sig.',
        'Opdater navn og e-mail på alle tilknyttede enheder og tjenester.'
      ],
      renamePros: [
        'Bevar alle eksisterende apps, køb og data',
        'Mindre opsætning krævet',
        'Behold alle cloud-indstillinger og -data'
      ],
      renameCons: [
        'Arver hele kontoens historik',
        'Deler potentielt betalingsmetode med partner',
        'Kan være svært at adskille personlige data'
      ],
      newSteps: [
        'Gå til appleid.apple.com og klik på "Opret dit Apple ID".',
        'Udfyld formularen med dine personlige oplysninger.',
        'Verificer din e-mail og telefonnummer.',
        'Log ind på dine enheder med det nye Apple ID.',
        'Konfigurer iCloud og andre Apple-tjenester efter behov.',
        'Overfør manuelt de data, du ønsker at beholde fra det gamle ID.'
      ],
      newPros: [
        'Start forfra med en ren konto',
        'Fuld kontrol over alle indstillinger og data',
        'Komplet adskillelse fra partners digitale liv'
      ],
      newCons: [
        'Mister adgang til tidligere køb og apps',
        'Tidskrævende opsætning af ny konto',
        'Manuel overførsel af ønskede data krævet'
      ]
    }
    return translations[key] || key
  }

  const renderSteps = (steps: string[]) => (
    <ol className="list-decimal list-inside space-y-2">
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  )

  const renderList = (items: string[], icon: 'pro' | 'con') => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {icon === 'pro' ? (
            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
          ) : (
            <XCircle className="mr-2 h-5 w-5 text-red-500 flex-shrink-0" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup className="flex flex-col space-y-4 mb-6" value={option} onValueChange={(value: 'rename' | 'new') => setOption(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rename" id="rename" />
            <Label htmlFor="rename">{t('optionRename')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="new" />
            <Label htmlFor="new">{t('optionNew')}</Label>
          </div>
        </RadioGroup>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="steps">
            <AccordionTrigger>{t('stepsTitle')}</AccordionTrigger>
            <AccordionContent>
              {renderSteps(option === 'rename' ? t('renameSteps') : t('newSteps'))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pros">
            <AccordionTrigger>{t('prosTitle')}</AccordionTrigger>
            <AccordionContent>
              {renderList(option === 'rename' ? t('renamePros') : t('newPros'), 'pro')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cons">
            <AccordionTrigger>{t('consTitle')}</AccordionTrigger>
            <AccordionContent>
              {renderList(option === 'rename' ? t('renameCons') : t('newCons'), 'con')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{t('confirmButton')}</Button>
      </CardFooter>
    </Card>
  )
}