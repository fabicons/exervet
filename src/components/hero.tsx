import React from 'react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('HomePage')
  return (
    <div className="text-5xl font-extrabold">
      <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">{t('title')}</span>
    </div>
  )
}
