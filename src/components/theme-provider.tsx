"use client"

import * as React from "react"
// CORRECTED IMPORT: ThemeProviderProps is now imported from the main entry point
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
