
import type {Metadata} from 'next';
import {Inter, Fira_Code} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider

const inter = Inter({subsets:['latin'], variable: '--font-inter'});
const firaCode = Fira_Code({subsets: ['latin'], variable: '--font-fira-code'})

export const metadata: Metadata = {
  title: 'BCA Study Hub',
  description: 'Your go-to resource for BCA syllabus, notes, and chapter summaries.',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          <main className="container mx-auto py-8 min-h-screen"> {/* Added min-h-screen */}
            {children}
          </main>
          <Footer />
         </ThemeProvider>
      </body>
    </html>
  );
}

