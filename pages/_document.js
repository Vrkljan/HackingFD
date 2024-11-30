import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            />

            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
