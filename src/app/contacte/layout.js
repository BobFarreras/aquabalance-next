// src/app/beneficis/layout.js
export const metadata = {
    title: 'Beneficis per a la Salut, Bellesa i Esport | AquaBalance',
    description: 'Descobreix com l\'aigua Kangen pot millorar la teva salut, potenciar la teva bellesa i optimitzar el teu rendiment esportiu.',
    alternates: {
      canonical: '/beneficis',
    },
  };
  
  export default function BeneficisLayout({ children }) {
    return <>{children}</>;
  }