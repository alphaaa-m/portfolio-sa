import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sadia Amjad | Physics Educator & Research Scholar',
  description: 'Portfolio of Sadia Amjad, Physics Educator and Research Scholar. Exploring Physics, Inspiring Minds, Building Future Scientists.',
  openGraph: {
    title: 'Sadia Amjad | Physics Educator & Research Scholar',
    description: 'Portfolio of Sadia Amjad, Physics Educator and Research Scholar.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadia Amjad | Physics Educator & Research Scholar',
    description: 'Portfolio of Sadia Amjad, Physics Educator and Research Scholar.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans" suppressHydrationWarning>
        <div className="relative min-h-screen flex flex-col z-0 overflow-hidden">
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-scientific-purple/20 via-deep-space to-deep-space"></div>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
