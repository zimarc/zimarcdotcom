import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

import './globals.css'

const dosis = Dosis({ subsets: ['latin'], display: 'swap', 

})

export const metadata: Metadata = {
  title: 'maysam.me',
  description: 'maysam architecture portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <header className=''>   <Header />      </header>
         <main > {children}   </main>
          <footer> <Footer /> </footer>
        </body>
    </html>
  )
}
