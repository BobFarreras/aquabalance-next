// src/app/politica-de-privacitat/page.js
"use client"; // <-- AFEGEIX AQUESTA LÍNIA A DALT DE TOT// src/app/avis-legal/page.js
import React from 'react';
import Link from 'next/link';


// Podem reutilitzar els mateixos estils
const LegalStyles = () => (
  <style jsx global>{`
    .legal-body { background-color: #f4f7f6; font-family: 'Inter', sans-serif; line-height: 1.7; color: #333; }
    .legal-container { max-width: 800px; margin: 40px auto; padding: 40px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; }
    .legal-header { padding: 20px 40px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0; }
    .legal-header-logo { font-weight: 800; font-size: 1.2rem; text-decoration: none; color: #333; }
    .gradient-text { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .legal-container h1 { font-size: 2.5rem; text-align: center; margin-bottom: 40px; font-weight: 800; }
    .legal-container h2 { font-size: 1.5rem; margin-top: 40px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; font-weight: 800; }
    .legal-container p, .legal-container ul { font-size: 1rem; color: #555; }
    .legal-container ul { padding-left: 20px; list-style-position: inside; } .legal-container li { margin-bottom: 10px; }
    .legal-container strong { color: #333; font-weight: 700; }
    .legal-container a { color: #3b82f6; text-decoration: none; font-weight: 500; } .legal-container a:hover { text-decoration: underline; }
    .legal-footer { text-align: center; padding: 40px 20px; font-size: 0.9rem; color: #777; }
  `}</style>
);

const AvisLegalPage = () => {
  return (
    <div className="legal-body">
      <LegalStyles />
      <header className="legal-header">
        <Link href="/" className="legal-header-logo">aquabalance.es</Link>
      </header>
      <main className="legal-container">
        <h1 className="gradient-text">Avís Legal</h1>
        
        <h2>1. Dades Identificatives del Titular</h2>
        <p>En compliment de la Llei 34/2002, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s&apos;informa que el titular d&apos;aquest lloc web és:</p>
        <ul>
          <li><strong>Titular:</strong> Aquabalance</li>
          <li><strong>NIF/CIF:</strong> [El teu NIF/CIF]</li>
          <li><strong>Domicili:</strong> Girona</li>
          <li><strong>Correu Electrònic:</strong> <a href="mailto:marta@aquabalance.es">marta@aquabalance.es</a></li>
        </ul>

        <h2>2. Condicions Generals d&apos;Ús</h2>
        <p>L&apos;accés a aquest lloc web atribueix la condició d&apos;usuari i implica l&apos;acceptació plena i sense reserves de totes i cadascuna de les disposicions incloses en aquest Avís Legal. L&apos;usuari es compromet a utilitzar el lloc web i els seus serveis i continguts de conformitat amb la llei, la moral, els bons costums i l&apos;ordre públic.</p>
        
        <h2>3. Propietat Intel·lectual i Industrial</h2>
        <p>Tots els continguts del lloc web, incloent-hi textos, gràfics, logos, icones i disseny, són propietat exclusiva de <strong>aquabalance.es</strong> o de tercers que n&apos;han autoritzat la inclusió, i estan protegits per les lleis de propietat intel·lectual i industrial. Queda rigorosament prohibida la reproducció, distribució i comunicació pública de la totalitat o part dels continguts amb finalitats comercials sense l&apos;autorització expressa del titular.</p>

        <h2>4. Exclusió de Responsabilitat</h2>
        <p>El titular del web no es responsabilitza dels danys i perjudicis que es puguin derivar d&apos;interferències o avaries tècniques alienes al seu control. Així mateix, no es fa responsable del contingut dels llocs web externs als quals es pugui accedir mitjançant enllaços des del nostre lloc web.</p>
        
        <h2>5. Protecció de Dades i Cookies</h2>
        <p>El tractament de les dades personals i l&apos;ús de cookies en aquest lloc web es regeixen pel que disposen els nostres documents específics, que podeu consultar a:</p>
        <ul>
          <li><Link href="/politica-de-privacitat" target="_blank">Política de Privacitat</Link></li>
          <li><Link href="/politica-de-cookies" target="_blank">Política de Cookies</Link></li>
        </ul>

        <h2>6. Llei Aplicable i Jurisdicció</h2>
        <p>Aquest Avís Legal es regeix per la legislació espanyola. Per a la resolució de qualsevol conflicte que pogués sorgir, les parts se sotmeten als Jutjats i Tribunals de la ciutat de <strong>Girona</strong>, amb renúncia expressa a qualsevol altre fur que els pogués correspondre.</p>
      </main>
      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} aquabalance.es. Tots els drets reservats.</p>
        <p><Link href="/">Tornar a la pàgina principal</Link></p>
      </footer>
    </div>
  );
};

export default AvisLegalPage;