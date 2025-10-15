import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'User Management Dashboard',
  description: 'A simple dashboard for managing users',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">
                    🧩 User Management Dashboard
                  </h1>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <a
                    href="/"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    صفحه اصلی
                  </a>
                  <a
                    href="/users"
                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    لیست کاربران
                  </a>
                  <a
                    href="/test"
                    className="bg-primary-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600"
                  >
                    صفحه تست
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
