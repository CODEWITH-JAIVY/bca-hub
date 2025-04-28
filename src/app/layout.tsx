import type {Metadata} from 'next';
import {Inter, Fira_Code} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';

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
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable} antialiased bg-gradient-to-r from-blue-500 to-purple-500`}>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 ">
        <Navbar />
        </div>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 ">
        <Footer />
        </div>
      </body>

      
    </html>
  );
}






