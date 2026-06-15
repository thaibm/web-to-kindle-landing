import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const CWS_URL =
  "https://chromewebstore.google.com/detail/send-web-to-kindle/egoihiminiafbalfnlekfhhmccihbgpe";

export const metadata: Metadata = {
  metadataBase: new URL("https://sendwebtokindle.com"),
  title: "Send Web to Kindle — Save Articles as EPUB from Chrome",
  description:
    "A Chrome extension that turns any web article into an EPUB and sends it to your Kindle via Gmail. Fully local, no server, no account required.",
  keywords: [
    "kindle",
    "epub",
    "chrome extension",
    "send to kindle",
    "read later",
    "web articles",
    "epub converter",
  ],
  openGraph: {
    title: "Send Web to Kindle — Save Articles as EPUB from Chrome",
    description:
      "Turn any web article into an EPUB and send it to your Kindle. Fully local, no server.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Web to Kindle — Save Articles as EPUB from Chrome",
    description:
      "Turn any web article into an EPUB and send it to your Kindle. Fully local, no server.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Send Web to Kindle",
  operatingSystem: "Chrome",
  applicationCategory: "BrowserApplication",
  description:
    "A Chrome extension that turns any web article into an EPUB and sends it to your Kindle via Gmail. Fully local, no server, no account required.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: CWS_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
