import '../styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '@/src/components/Navbar/Navbar'
import Footer from '@/src/components/Footer/Footer'
import { Suspense } from 'react'
import Loader from './loading'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500', '600','700','800','900']
})
export const metadata: Metadata = {
  title: 'Rwanda Coding Academy',
  description: 'This is an Excellence center focusing on promoting young Rwandan developers',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
        <link rel="stylesheet" href="/poppins.css" />
      </head>
      <body className={poppins.className}>
        <Suspense fallback={<Loader />}>
        {children}
        </Suspense>
      </body>
    </html>
  )
}
