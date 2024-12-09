import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://chitramela.in'),
  title: "Chitramela 2024 | Official Website",
  description: "Chitramela (చిత్రమేళ) - The Premier Art, Photography & Film Festival by KL University SAC. Annual cultural festival celebrating creative arts at Koneru Lakshmaiah Education Foundation, Vijayawada.",
  keywords: "Chitramela, Chitramela 2025, Chitra Mela, చిత్రమేళ, KL University fest, KLEF cultural fest, Avanflix, ZeroOne, Corgnetrix, Student Activity Center KLU, Koneru Lakshmaiah Education Foundation events, Vijayawada arts festival, Andhra Pradesh cultural events",
  openGraph: {
    title: "Chitramela 2024 | Official Website",
    description: "Chitramela (చిత్రమేళ) - The Premier Art, Photography & Film Festival by KL University SAC, sponsored by Avanflix, ZeroOne, and Corgnetrix. Join us for a celebration of creative arts and culture at KLEF, Vijayawada.",
    url: "https://chitramela.in",
    siteName: "Chitramela 2024",
    images: [
      {
        url: "https://chitramela.in/assets/newlogo.png",
        width: 1200,
        height: 630,
        alt: "Chitramela 2024 - KL University's Premier Arts Festival"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitramela 2024 | Official Website",
    description: "Chitramela (చిత్రమేళ) - KL University's Premier Art, Photography & Film Festival. Sponsored by Avanflix, ZeroOne, and Corgnetrix.",
    images: ["https://chitramela.in/assets/newlogo.png"],
  },
  authors: [
    { name: "KL University Student Activity Center", url: "https://sac.kluniversity.in/" }
  ],
  publisher: "Koneru Lakshmaiah Education Foundation",
  organizationAffiliation: [
    { name: "Koneru Lakshmaiah Education Foundation", url: "https://www.kluniversity.in/" },
    { name: "KLU Student Activity Center", url: "https://sac.kluniversity.in/" }
  ],
  sponsors: [
    { name: "Avanflix", url: "https://www.youtube.com/@avanflix", type: "Title Sponsor" },
    { name: "ZeroOne", url: "https://klzeroone.vercel.app/", type: "Technical Sponsor" },
    { name: "Corgnetrix", url: "https://corgnetrix.com/", type: "Technical Sponsor" }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  canonical: "https://chitramela.in",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
