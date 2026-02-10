import './globals.css'
import React from 'react'
import Header from '../components/Header'
import { siteSettings } from '../data/siteSettings'

export const metadata = {
  title: 'Asif Mollik — Tech Entrepreneur & Full-Stack Developer | Bangladesh',
  description: 'Asif Mollik - Founder & CEO of Alphainno. Full-stack developer, tech entrepreneur, and digital innovation leader. Specializing in React, Node.js, software solutions, and startup mentorship.',
  keywords: ['Asif Mollik', 'tech entrepreneur', 'full-stack developer', 'Alphainno', 'Bangladesh', 'software developer', 'startup founder', 'web development', 'React', 'Node.js'],
  authors: [{ name: 'Asif Mollik' }],
  creator: 'Asif Mollik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asifmollik.com',
    siteName: 'Asif Mollik',
    title: 'Asif Mollik — Tech Entrepreneur & Full-Stack Developer',
    description: 'Founder of Alphainno. Full-stack developer, entrepreneur, and digital innovation leader from Bangladesh.',
    images: [
      {
        url: 'https://asifmollik.com/images/asif-mollik-ceo.png',
        width: 1200,
        height: 630,
        alt: 'Asif Mollik - Tech Entrepreneur',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@asifmollik',
    creator: '@asifmollik',
    title: 'Asif Mollik — Tech Entrepreneur & Full-Stack Developer',
    description: 'Founder of Alphainno. Full-stack developer and digital innovation leader.',
    images: 'https://asifmollik.com/images/asif-mollik-ceo.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  canonical: 'https://asifmollik.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dynamic SEO values
  const { title, description, favicon } = siteSettings

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Asif Mollik',
    url: 'https://asifmollik.com',
    description: 'Tech Entrepreneur, Full-Stack Developer, and Founder of Alphainno',
    image: 'https://asifmollik.com/images/asif-mollik-ceo.png',
    sameAs: [
      'https://linkedin.com/in/asifmollik',
      'https://twitter.com/asifmollik',
      'https://facebook.com/asifmollik',
      'https://youtube.com/@asifmollik12',
      'https://github.com/asifmollik',
    ],
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'Alphainno',
      url: 'https://alphainno.com',
    },
  }

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Asif Mollik, tech entrepreneur, full-stack developer, Alphainno, Bangladesh, software developer, startup founder, web development, React, Node.js" />
        <meta name="author" content="Asif Mollik" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://asifmollik.com" />
        <link rel="icon" href={favicon} type="image/x-icon" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://asifmollik.com" />
        <meta property="og:site_name" content="Asif Mollik" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://asifmollik.com/images/asif-mollik-ceo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asifmollik" />
        <meta name="twitter:creator" content="@asifmollik" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://asifmollik.com/images/asif-mollik-ceo.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
        <Header />
        <main className="min-h-screen w-full pb-12">
          {children}
        </main>
      </body>
    </html>
  )
}
