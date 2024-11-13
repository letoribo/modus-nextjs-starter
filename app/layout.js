import { ApolloWrapper } from "@/lib/apollo-provider"
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'Hello, Hypermode!',
  description: 'Modus Next.js Starter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}
