import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1, initial-scale=1"
          />
          <title>Programing-School | Blog</title>
          <link rel="icon" href="./channels4_profile.jpg" />
          <link rel="icon" href="../public/channels4_profile.jpg" />
          <link rel="icon" href="/public/channels4_profile.jpg" />
          <script src="https://cdn.tailwindcss.com" />
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
