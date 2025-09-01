// src/app/robots.js

export default function robots() {
    // ❗️ IMPORTANT: Substitueix això pel teu domini real
    const domain = 'https://aquabalance.es';
  
    return {
      rules: {
        userAgent: '*', // Aquesta regla s'aplica a tots els robots
        allow: '/',     // Permet accedir a totes les pàgines del lloc
        // disallow: '/privat/', // Exemple de com bloquejar una carpeta si en tinguessis alguna
      },
      sitemap: `${domain}/sitemap.xml`, // Indica a tots els robots on és el teu mapa del lloc
    };
  }