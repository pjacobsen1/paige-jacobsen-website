import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Paige Jacobsen</title>
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
