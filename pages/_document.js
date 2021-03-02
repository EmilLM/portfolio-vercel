import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="description" content="Landing page for all web apps made by Luchian Emil as a full stack web developer"/>
          <meta name="author" content="Luchian Emil"/>
          <meta name="keywords" content="next.js, react, web app, portfolio, Luchian Emil"/>
          <link rel="icon" href="/assets/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument