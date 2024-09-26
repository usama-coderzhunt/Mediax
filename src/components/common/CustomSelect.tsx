import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export type SelectOption = {
  label: string
  value: string
}

type Props = {
  placeholder: string
  label: string
  options: SelectOption[]
  className?: string
}

export function CustomSelect({ placeholder, label, options, className }: Props) {
  return (
    <Select>
      <SelectTrigger className={cn('h-14', className)}>
        <SelectValue className='opacity-30' placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map(option => {
            return (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
