import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Myna-English | Kursus Speaking & Grammar Online 1-on-1 via Zoom | Hemat 50%",
  description:
    "Kursus bahasa Inggris private online 1-on-1 via Zoom. Fokus speaking & grammar untuk Academic English dan Daily Conversation. Trial gratis + diskon 50%. Tutor berpengalaman internasional. Jadwal fleksibel.",

  keywords: [
    "kursus bahasa inggris online",
    "les bahasa inggris private",
    "speaking english class",
    "grammar bahasa inggris",
    "kursus english online zoom",
    "les inggris 1 on 1",
    "academic english",
    "daily conversation english",
    "belajar speaking english",
    "kursus toefl ielts",
    "english tutor indonesia",
    "les bahasa inggris murah",
    "pronunciation training",
    "business english course",
    "interview english preparation",
  ].join(", "),

  authors: [{ name: "Myna-English", url: "https://mynaenglish.com" }],
  creator: "Myna-English",
  publisher: "Myna-English",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mynaenglish.com",
    siteName: "Myna-English",
    title:
      "Kursus Speaking & Grammar Online 1-on-1 | Myna-English | Diskon 50%",
    description:
      "Kursus bahasa Inggris private online via Zoom. Fokus speaking & grammar dengan tutor berpengalaman internasional. Trial gratis + hemat hingga 50%. Jadwal fleksibel sesuai kebutuhan Anda.",
    images: [
      {
        url: "https://mynaenglish.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Myna-English - Kursus Speaking & Grammar Online",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@myna_english",
    creator: "@myna_english",
    title: "Kursus Speaking & Grammar Online 1-on-1 | Myna-English",
    description:
      "Belajar bahasa Inggris private online via Zoom. Speaking & grammar dengan tutor internasional. Trial gratis + diskon 50%!",
    images: ["https://mynaenglish.com/twitter-image.jpg"],
  },

  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
    // other: "your-other-verification-code",
  },

  alternates: {
    canonical: "https://mynaenglish.com",
    languages: {
      "id-ID": "https://mynaenglish.com",
      "en-US": "https://mynaenglish.com/en",
    },
  },

  category: "Education",
  classification: "Education, Language Learning, Online Courses",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#D88755",
    "theme-color": "#D88755",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" dir="ltr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Myna-English",
              alternateName: "Myna English Course",
              url: "https://mynaenglish.com",
              logo: "https://mynaenglish.com/icon.png",
              description:
                "Kursus bahasa Inggris private online 1-on-1 via Zoom yang fokus pada peningkatan kemampuan speaking dan grammar",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressRegion: "Jakarta",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-812-3456-7890",
                contactType: "customer service",
                availableLanguage: ["Indonesian", "English"],
              },
              founder: {
                "@type": "Person",
                name: "Daniella Amyana",
                description:
                  "Founder dengan pengalaman pendidikan internasional di UI, Tilburg University Belanda, dan Coventry University Inggris",
              },
              sameAs: [
                "https://instagram.com/myna_english",
                "https://tiktok.com/@myna_english",
              ],
              offers: {
                "@type": "Offer",
                category: "Online English Course",
                name: "Private Online 1-on-1 English Course",
                description:
                  "Kursus bahasa Inggris private online fokus speaking dan grammar",
                price: "800000",
                priceCurrency: "IDR",
                availability: "InStock",
                validFrom: "2025-01-01",
                priceValidUntil: "2025-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "300",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Rina Amelia",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Setelah 3 bulan belajar Academic English di Myna, sekarang saya bisa interview beasiswa dengan percaya diri!",
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="ICBM" content="-6.2088,106.8456" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}