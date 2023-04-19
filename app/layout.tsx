/* eslint-disable react/react-in-jsx-scope */
import Footer from '@/components/footer'
import Navbar from '../components/navbar'
import './styles/globals.scss'

export const metadata = {
  title: 'Kayla Marie Lane',
  description: 'Front End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
