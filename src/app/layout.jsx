
export const metadata = {
    title: "pseudoBlog",
    description: "Next.js Blog Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}
