'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  if (typeof window === 'undefined') {
    return <>{children}</> // Evitar problemas en el servidor
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
