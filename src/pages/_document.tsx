import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta
            name="description"
            content="Stefan Catalin's personal portfolio showcasing remarkable web development projects and skills."
          />
          {/* OpenGraph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://stefancatalin.ro/" />
          <meta
            property="og:title"
            content="Stefan Catalin - Personal Portfolio"
          />
          <meta
            property="og:description"
            content="Stefan Catalin's personal portfolio showcasing remarkable web development projects and skills."
          />
          <meta
            property="og:image"
            content="http://stefancatalin.ro/page_cover.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://stefancatalin.ro/" />
          <meta
            property="twitter:title"
            content="Stefan Catalin - Personal Portfolio"
          />
          <meta
            property="twitter:description"
            content="Stefan Catalin's personal portfolio showcasing remarkable web development projects and skills."
          />
          <meta
            property="twitter:image"
            content="http://stefancatalin.ro/page_cover.png"
          />

          {/* Google / Search Engine Tags */}
          <meta itemProp="name" content="Stefan Catalin - Personal Portfolio" />
          <meta
            itemProp="description"
            content="Stefan Catalin's personal portfolio showcasing remarkable web development projects and skills."
          />
          <meta
            itemProp="image"
            content="http://stefancatalin.ro/page_cover.png"
          />

          {/* Favicons, touch icons and Pinned tabs icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#0d1426" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
