import type { Metadata } from 'next';
import {
  Inter,
  Poppins,
  Playfair_Display,
  Montserrat,
  Open_Sans,
} from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: 'ZESTLIFE | Thrive Behind Barriers',
  description:
    'Thrive Behind Barriers | Helping Hands. At Zestlife Disability, we are a spirited bunch of NDIS superheroes on a mission to sprinkle some magic into everyday life. Our team of expert wizards is here to offer a helping hand with personal care and more because we believe in transforming challenges into triumphs!',
  keywords:
    'Disability, Support, Togetherness, Assistance, Positive Mindset, Determination, Right Support, NDIS',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfairDisplay.variable} ${montserrat.variable} ${openSans.variable} font-sans`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
