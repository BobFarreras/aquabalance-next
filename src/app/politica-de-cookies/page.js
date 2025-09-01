// src/app/politica-de-privacitat/page.js
"use client"; // <-- AFEGEIX AQUESTA LÍNIA A DALT DE TOT// src/app/politica-de-cookies/page.js
import React from 'react';
import Link from 'next/link';



// Reutilitzem els mateixos estils
const LegalStyles = () => (
  <style jsx global>{`
    .legal-body { background-color: #f4f7f6; font-family: 'Inter', sans-serif; line-height: 1.7; color: #333; }
    .legal-container { max-width: 800px; margin: 40px auto; padding: 40px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; }
    .legal-header { padding: 20px 40px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0; }
    .legal-header-logo { font-weight: 800; font-size: 1.2rem; text-decoration: none; color: #333; }
    .gradient-text { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .legal-container h1 { font-size: 2.5rem; text-align: center; margin-bottom: 40px; font-weight: 800; }
    .legal-container h2 { font-size: 1.5rem; margin-top: 40px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; font-weight: 800; }
    .legal-container p, .legal-container ul, .legal-container table { font-size: 1rem; color: #555; }
    .legal-container table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    .legal-container th, .legal-container td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; }
    .legal-container th { background-color: #f9f9f9; }
    .legal-container ul { padding-left: 20px; } .legal-container li { margin-bottom: 10px; }
    .legal-container strong { color: #333; font-weight: 700; }
    .legal-container a { color: #3b82f6; text-decoration: none; font-weight: 500; } .legal-container a:hover { text-decoration: underline; }
    .legal-footer { text-align: center; padding: 40px 20px; font-size: 0.9rem; color: #777; }
  `}</style>
);

const PoliticaDeCookiesPage = () => {
  return (
    <div className="legal-body">
      <LegalStyles />
      <header className="legal-header">
        <Link href="/" className="legal-header-logo">aquabalance.es</Link>
      </header>
      <main className="legal-container">
        <h1 className="gradient-text">Política de Cookies</h1>
        
        <h2>1. Què són les Cookies?</h2>
        <p>Una cookie és un petit fitxer de text que un lloc web emmagatzema al teu ordinador o dispositiu mòbil quan el visites. Aquestes permeten que el lloc web recordi les teves accions i preferències durant un període de temps.</p>

        <h2>2. Com Utilitzem les Cookies?</h2>
        <p>En aquest lloc web, utilitzem cookies principalment per a finalitats analítiques i tècniques, per millorar la funcionalitat i l&apos;experiència de l&apos;usuari.</p>
        
        <table>
          <thead>
            <tr>
              <th>Proveïdor</th>
              <th>Nom de la Cookie</th>
              <th>Finalitat</th>
              <th>Durada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Analytics</td>
              <td>_ga, _gid, _gat</td>
              <td>Aquestes cookies ens ajuden a entendre com interactuen els visitants amb la nostra pàgina web. Recopilen informació de manera anònima.</td>
              <td>Fins a 2 anys</td>
            </tr>
            <tr>
              <td>aquabalance.es</td>
              <td>cookieConsent</td>
              <td>Aquesta cookie tècnica és necessària per recordar la teva decisió sobre l&apos;acceptació o rebuig de les cookies analítiques.</td>
              <td>1 any</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Important:</strong> Les cookies de Google Analytics només s&apos;instal·laran al teu dispositiu si ens dones el teu consentiment explícit a través del banner de cookies.</p>

        <h2>3. Com Pots Controlar les Cookies?</h2>
        <p>Pots controlar i/o eliminar les cookies sempre que vulguis a través de la configuració del teu navegador. Si canvies d&apos;opinió sobre el teu consentiment, pots gestionar les teves preferències a través del nostre gestor de cookies, normalment accessible des d&apos;un enllaç al peu de pàgina.</p>

        <h2>4. Canvis a la Política de Cookies</h2>
        <p>Podem actualitzar la nostra Política de Cookies de tant en tant. Et recomanem que revisis aquesta pàgina periòdicament per estar informat sobre com utilitzem les cookies.</p>
      </main>
      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} aquabalance.es. Tots els drets reservats.</p>
        <p><Link href="/">Tornar a la pàgina principal</Link></p>
      </footer>
    </div>
  );
};

export default PoliticaDeCookiesPage;