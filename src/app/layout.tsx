import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weatherly',
  description: 'Weatherly is a website that tells you the weather of any location in the world. You can enter a city name, a zip code, or even a landmark and get the current temperature, humidity, wind speed, and forecast for the next few days. Weatherly also provides you with useful tips and facts about the weather, such as the best time to visit a place, the effects of climate change, and how to stay safe in extreme conditions. Weatherly is your one-stop destination for all your weather needs.☀️🌧️🌬️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
