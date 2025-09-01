// src/app/politica-de-privacitat/page.js
"use client"; // <-- AFEGEIX AQUESTA LÍNIA A DALT DE TOT// src/app/politica-de-privacitat/page.js
import React from 'react';
import Link from 'next/link';



// Component per als estils (per mantenir el codi net)
const LegalStyles = () => (
  <style jsx global>{`
    .legal-body { background-color: #f4f7f6; font-family: 'Inter', sans-serif; line-height: 1.7; color: #333; }
    .legal-container { max-width: 800px; margin: 40px auto; padding: 40px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; }
    .legal-header { padding: 20px 40px; background-color: #ffffff; border-bottom: 1px solid #e0e0e0; }
    .legal-header-logo { font-weight: 800; font-size: 1.2rem; text-decoration: none; color: #333; }
    .gradient-text { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .legal-container h1 { font-size: 2.5rem; text-align: center; margin-bottom: 20px; font-weight: 800; }
    .legal-container h2 { font-size: 1.5rem; margin-top: 40px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; font-weight: 800; }
    .legal-container h4 { font-size: 1.1rem; margin-top: 25px; margin-bottom: 10px; font-weight: 800; }
    .legal-container p, .legal-container ul { font-size: 1rem; color: #555; }
    .legal-container ul { padding-left: 20px; } .legal-container li { margin-bottom: 10px; }
    .legal-container strong { color: #333; font-weight: 700; }
    .legal-container a { color: #3b82f6; text-decoration: none; font-weight: 500; } .legal-container a:hover { text-decoration: underline; }
    .last-updated { text-align: center; font-size: 0.9rem; color: #777; margin-bottom: 40px; }
    .legal-footer { text-align: center; padding: 40px 20px; font-size: 0.9rem; color: #777; }
  `}</style>
);

const PoliticaDePrivacitatPage = () => {
  return (
    <div className="legal-body">
      <LegalStyles />
      <header className="legal-header">
        <Link href="/" className="legal-header-logo">aquabalance.es</Link>
      </header>
      <main className="legal-container">
        <h1 className="gradient-text">Política de Privacitat</h1>
        <p className="last-updated"><strong>Última actualització:</strong> 1 de setembre de 2025</p>
        
        <h2>1. Responsable del Tractament de Dades</h2>
        <p>El responsable del tractament de les teves dades és <strong> Aquabalance </strong> ("aquabalance.es"). Per a qualsevol consulta relacionada amb la teva privacitat, pots contactar-nos a través del correu electrònic: <strong>marta@aquabalance.es</strong>.</p>
        
        <h2>2. Quines dades personals recollim i per què?</h2>
        <p>Només recollim les dades estrictament necessàries per poder respondre a les teves consultes sobre els productes Enagic.</p>
        
        <h4>a) Formulari de Contacte</h4>
        <ul>
            <li><strong>Dades Recopilades:</strong> Nom, adreça d'email, telèfon (opcional), producte d'interès i el missatge que ens envies.</li>
            <li><strong>Finalitat:</strong> Utilitzem aquestes dades exclusivament per gestionar i respondre a la teva sol·licitud d'informació sobre els nostres productes i serveis.</li>
            <li><strong>Base Legal:</strong> El teu consentiment explícit, que ens dones en marcar la casella corresponent i enviar el formulari.</li>
        </ul>

        <h2>3. Amb qui compartim les teves dades?</h2>
        <p>Per al correcte funcionament dels nostres serveis, col·laborem amb proveïdors de confiança que tracten les teves dades en nom nostre:</p>
        <ul>
            <li><strong>Hosting i Email:</strong> Les dades del web i els correus es gestionen a través de <strong>Hostinger</strong>, el nostre proveïdor de hosting.</li>
            <li><strong>Enviament del Formulari:</strong> Per a la gestió tècnica de l'enviament del formulari des del web, utilitzem el servei <strong>EmailJS</strong>.</li>
        </ul>
        <p>Tots els proveïdors compleixen amb el RGPD. Les transferències internacionals de dades es realitzen sota l'empara de les garanties adequades de protecció de dades.</p>

        <h2>4. Quant de temps conservem les teves dades?</h2>
        <p>Les dades del formulari de contacte es conservaran durant el temps estrictament necessari per complir amb la finalitat per a la qual van ser recollides i per determinar les possibles responsabilitats legals que es poguessin derivar.</p>

        <h2>5. Quins són els teus drets?</h2>
        <p>Tens dret a accedir, rectificar i suprimir les teves dades, així com altres drets reconeguts per la normativa. Pots exercir-los enviant un correu electrònic a <strong>marta@aquabalance.es</strong>, indicant clarament el dret que vols exercir.</p>
        <p>Si consideres que els teus drets no han estat atesos, tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD).</p>
      </main>
      <footer className="legal-footer">
        <p>&copy; {new Date().getFullYear()} aquabalance.es. Tots els drets reservats.</p>
        <p><Link href="/">Tornar a la pàgina principal</Link></p>
      </footer>
    </div>
  );
};

export default PoliticaDePrivacitatPage;