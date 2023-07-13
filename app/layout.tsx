import './globals.css'
import {Montserrat} from 'next/font/google'
import Link from 'next/link'
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Movie Info App',
  description: 'A movie information app that utilises the powerful TMDB to cater movie information.',
}


export default function RootLayout({ children }:React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} mx-32 my-12`} style={{background: 'black', color: 'white'}}>
        <nav >
          <ul style={{display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center'}}>
            <Link href={'/'}>
              <li>Popular</li>
            </Link>
            <Link href={'/upcoming'}>
              <li>Upcoming</li>
            </Link> 
            <Link href={'/top_rated'}>
              <li>Top Rated</li>
            </Link>
            
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
