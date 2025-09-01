// src/app/dutxa-anespa/layout.js

// Aquest fitxer és un Component de Servidor, per tant, SÍ que pot exportar metadata.
export const metadata = {
    title: 'Dutxa Anespa® DX - Spa a Casa | AquaBalance',
    description: 'Transforma la teva dutxa en una experiència de spa amb el sistema Anespa® DX. Gaudeix d\'aigua lliure de clor i rica en minerals.',
    alternates: {
      canonical: '/dutxa-anespa',
    },
  };
  
  // El layout simplement mostra la pàgina que té a sota (el seu 'children').
  export default function DutxaAnespaLayout({ children }) {
    return <>{children}</>;
  }