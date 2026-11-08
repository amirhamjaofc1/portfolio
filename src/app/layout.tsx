import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { CustomCursor } from '@/components/common/CustomCursor';
import { NoiseOverlay } from '@/components/common/NoiseOverlay';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Amir Hamja — Full Stack Web Developer & Startup Builder',
  description:
    'Personal portfolio of Amir Hamja, a Full Stack Web Developer and third-year Computer Science & Engineering student building modern web applications, scalable architectures, and future startup ventures.',
  keywords: [
    'Amir Hamja',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Computer Science Student',
    'Software Engineer',
    'BazarDor',
    'Web Developer Bangladesh',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP Animation',
  ],
  authors: [{ name: 'Amir Hamja', url: 'https://github.com/amirhamjaofc1' }],
  creator: 'Amir Hamja',
  publisher: 'Amir Hamja',
  metadataBase: new URL('https://amir-hamja.vercel.app'), // TODO: update with production domain if custom
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amir-hamja.vercel.app',
    title: 'Amir Hamja — Full Stack Web Developer & Startup Builder',
    description:
      'Explore projects, architecture case studies, and engineering philosophy of Amir Hamja. Specializing in Next.js, TypeScript, Better Auth, and fluid kinetic web design.',
    siteName: 'Amir Hamja Portfolio',
    images: [
      {
        url: '/images/amir-2-dark.webp',
        width: 884,
        height: 1147,
        alt: 'Amir Hamja - Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amir Hamja — Full Stack Web Developer',
    description:
      'Full Stack Web Developer & CSE Student building high-performance web products and tech startups.',
    images: ['/images/amir-2-dark.webp'],
    creator: '@amirhamja_dev',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg text-text font-sans antialiased selection:bg-accent selection:text-bg">
        <SmoothScroll>
          {/* Subtle noise grain for cinematic look */}
          <NoiseOverlay />

          {/* Desktop Custom Cursor follower */}
          <CustomCursor />

          {/* Responsive Sticky Header / Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

