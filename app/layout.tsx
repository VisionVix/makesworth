import './globals.css'
export const metadata = { title: 'makesworth-nextjs', description: 'Converted by VEX Studio' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}