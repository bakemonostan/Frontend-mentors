import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main>
            <NextScript></NextScript>
          </Main>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
