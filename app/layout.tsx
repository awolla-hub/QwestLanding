import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qwestapp.ru"),
  title: {
    default: "Qwest — Сервис выполнения заданий",
    template: "%s | Qwest",
  },
  description: "Герои рядом. Задания ждут. Найдите исполнителя для любой задачи или станьте героем и зарабатывайте. Быстро, надёжно, безопасно.",
  keywords: ["qwest", "задания", "исполнители", "курьер", "доставка", "помощь", "услуги", "фриланс", "подработка", "заработок"],
  authors: [{ name: "Qwest Team" }],
  creator: "Qwest",
  publisher: "Qwest",
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
    locale: "ru_RU",
    url: "https://qwestapp.ru",
    siteName: "Qwest",
    title: "Qwest — Сервис выполнения заданий",
    description: "Герои рядом. Задания ждут. Найдите исполнителя для любой задачи или станьте героем и зарабатывайте.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qwest — Сервис выполнения заданий",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qwest — Сервис выполнения заданий",
    description: "Герои рядом. Задания ждут. Найдите исполнителя для любой задачи.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://qwestapp.ru",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "Qwest",
      description: "Сервис выполнения заданий. Найдите исполнителя для любой задачи или станьте героем и зарабатывайте.",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "RUB",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150"
      }
    },
    {
      "@type": "Organization",
      name: "Qwest",
      url: "https://qwestapp.ru",
      logo: "https://qwestapp.ru/icon-512x512.png",
      sameAs: [
        "https://t.me/qwest_app"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@qwestapp.ru",
        availableLanguage: "Russian"
      }
    },
    {
      "@type": "WebSite",
      name: "Qwest",
      url: "https://qwestapp.ru",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://qwestapp.ru/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#A855F7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/icon.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/hero-action.png" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${bungee.variable} antialiased`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Перейти к содержимому
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
