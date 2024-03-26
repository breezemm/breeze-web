
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "@breeze/ui/globals.css"
import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import CustomLayout from '../components/CustomLayout'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Breeze',
  description: 'Breeze | The event planning app',
}



export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <CustomLayout>
        {children}
      </CustomLayout>
      </body>
      </html>
  )
}
