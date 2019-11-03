import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';
export default class EvexDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                    <meta name="description" content="Evex for events and exhibitions" />
                    <meta name="keywords" content="Evex, events, exhibitions" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <Manifest href='/manifest.json' themeColor="#1f4c94" initialScale='1'/>
                    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"></link>
                    <script src="https://kit.fontawesome.com/e0ad48c5bd.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}