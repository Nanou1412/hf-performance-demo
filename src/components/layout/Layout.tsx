import DemoBanner from './DemoBanner'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-dark text-white">
      <DemoBanner />
      <Header />
      <main className="flex-1 px-4 sm:px-8 py-10 bg-gradient-to-b from-dark to-black">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
