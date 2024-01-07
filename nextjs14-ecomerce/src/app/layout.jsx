

import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import ReduxProvider from '@/redux/reduxProvider'



export const metadata = {
  title: 'EComerce Nextjs 14',
  description: 'publish by me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
