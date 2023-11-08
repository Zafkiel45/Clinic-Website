import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Schedule right now! Please contact with we and schedule a hour',
}

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body className={`${inter.className} animate-fadeIn overflow-x-hidden`}>
        {children}
        {}
      </body>
    </html>
  )
}
