import Footer from "@components/footer/page";
import Navbar from "@components/navbar/page"
import '@styles/globals.css';

export const metadata = {
    title: "pseudoBlog",
    description: "Next.js Blog Website"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <div className="">
          <main className="app">
            <Navbar />
            {children}
            <Footer />
          </main>
          </div>
        </body>
    </html>
  )
}
