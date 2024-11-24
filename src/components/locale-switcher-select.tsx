'use client'

import { Languages } from 'lucide-react'
import clsx from 'clsx'
import { useTransition } from 'react'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/services/locale'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
type Props = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
  label: string
}

export default function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition()

  function onChange(value: string) {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger aria-label={label} className={clsx(isPending && 'pointer-events-none opacity-60')}>
          <Languages size={24} />
        </SelectTrigger>
        <SelectContent align="end" position="popper">
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
