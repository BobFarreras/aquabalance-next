// src/app/layout.js
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import I18nProvider from '@/components/I18nProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// ✅ OBJECTE METADATA COMPLET I OPTIMITZAT
export const metadata = {
  // Informació Bàsica i Títol Dinàmic
  title: {
    default: 'AquaBalance - Transforma la teva aigua, transforma la teva vida',
    template: '%s | AquaBalance', // Afegeix "| AquaBalance" al final de cada títol de pàgina
  },
  description: 'Descobreix els beneficis de l\'aigua Kangen i els sistemes de dutxa Anespa per a una salut i benestar òptims.',
  
  // SEO Fonamental
  metadataBase: new URL('https://www.aquabalance.es'), // ❗️ IMPORTANT: Posa aquí el teu domini real
  alternates: {
    canonical: '/', // URL canònica de la pàgina principal
  },
  
  // Xarxes Socials (Open Graph per a Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'AquaBalance - Transforma la teva aigua, transforma la teva vida',
    description: 'Descobreix els beneficis de l\'aigua Kangen i els sistemes de dutxa Anespa.',
    url: 'https://www.aquabalance.es', // ❗️ Posa aquí el teu domini real
    siteName: 'AquaBalance',
    images: [
      {
        url: '/og-image.png', // Aquesta imatge ha d'estar a la teva carpeta /public
        width: 1200,
        height: 630,
        alt: 'Logotip i eslògan d\'AquaBalance',
      },
    ],
    locale: 'ca_ES',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AquaBalance - Transforma la teva aigua, transforma la teva vida',
    description: 'Descobreix els beneficis de l\'aigua Kangen i els sistemes de dutxa Anespa.',
    images: ['/og-image.png'], // Utilitza la mateixa imatge que Open Graph
  },

  // Icones i Aparença
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#0ea5e9', // Color principal (blau cel) per a la barra del navegador en mòbils

  // Altres (menys importants per a Google, però bones pràctiques)
  keywords: ['Aigua Kangen', 'Anespa', 'Enagic', 'ionitzador d\'aigua', 'salut', 'benestar', 'aigua alcalina'],
};


export default function RootLayout({ children }) {
  // ... (la resta del teu component RootLayout no canvia)
  return (
    <html lang="ca">
      <body className={inter.className}>
        <I18nProvider>
          <div className="flex flex-col min-h-screen bg-white text-slate-800">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}