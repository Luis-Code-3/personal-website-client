import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luis Cordova',
  description: 'Personal portfolio website designed & built by Luis Cordova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='stickyNav'>
          <Suspense>
          <Navbar/>
          </Suspense>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
