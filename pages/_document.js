import { Html, Head, Main, NextScript } from 'next/document'
import { Footer } from '../components/footer.component'
import { Nav } from '../components/nav.component'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Nav />
        <Main />
        <Footer />
        <NextScript />

      </body>

    </Html>
  )
}
