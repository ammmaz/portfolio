// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Senior Web Developer | 4 Years Experience',
  description: 'Professional portfolio showcasing web development projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  )
}