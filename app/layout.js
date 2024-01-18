import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/page'
import Provider from './Provider'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Local Shop',
  description: 'Local Shop E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className='w-[97%] mx-auto'>
          <Provider>
        <Navbar/>
            {children}
            
            </Provider>
        </div>
        <SpeedInsights />
        </body>
        
    </html>
  )
}
