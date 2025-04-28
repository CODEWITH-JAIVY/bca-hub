import type {Metadata} from 'next/types/metadata';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BCA Study Hub',
  description: 'Your go-to resource for BCA syllabus, notes, and chapter summaries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-gradient-to-r from-blue-100 to-blue-300">
        <Navbar />
        </div>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <div className="bg-gradient-to-r from-blue-100 to-blue-300">
        <Footer />
        </div>
      </body>
    </html>
  );
}






