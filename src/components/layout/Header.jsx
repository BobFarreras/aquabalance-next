// src/components/Header.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // ✅ Canvi: Importem Link de Next.js
import Image from 'next/image'; // ✅ Canvi: Importem Image de Next.js
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const logoUrl = "https://res.cloudinary.com/dvqhfapep/image/upload/v1751570382/log1_aqua-removebg-preview_khef9r.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-1 py-1">
      <Button
        onClick={() => changeLanguage('ca')}
        variant={i18n.language.startsWith('ca') ? 'default' : 'ghost'}
        size="sm"
        className="text-xs rounded-full"
      >
        CA
      </Button>
      <Button
        onClick={() => changeLanguage('es')}
        variant={i18n.language.startsWith('es') ? 'default' : 'ghost'}
        size="sm"
        className="text-xs rounded-full"
      >
        ES
      </Button>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Canvi: Utilitzem 'href' en lloc de 'to' per als enllaços de Next.js
  const navLinks = [
    { href: '/inici', label: t('nav.home') },
    { href: '/aigua-kangen', label: t('nav.kangen') },
    { href: '/dutxa-anespa', label: t('nav.anespa') },
    { href: '/emguarde', label: t('nav.emGuarde') },
    { href: '/beneficis', label: t('nav.benefits') },
    { href: '/contacte', label: t('nav.contact') },
  ];

  const linkHover = { scale: 1.05, color: '#0ea5e9', transition: { duration: 0.2 } };
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Canvi: <NavLink to="..."> passa a ser <Link href="..."> */}
          <Link href="/" className="flex items-center space-x-3">
            {/* ✅ Canvi: <img> passa a ser <Image> */}
       
            <Image 
              src={logoUrl} 
              alt="Logo de Aquabalance" 
              width={170} // Proporcionem una amplada
              height={48}  // i una alçada
              className="h-12 w-auto" // Aquesta classe ajustarà la mida visualment
              priority // Prioritzem la càrrega del logo
            />
                 <span className="hidden sm:inline text-2xl font-bold text-[#007AC0] tracking-tight">
              AQUABALANCE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.div key={link.href} whileHover={linkHover}>
                  {/* ✅ Canvi: <NavLink> passa a ser <Link> */}
                  <Link href={link.href} className="text-gray-600 transition font-medium hover:text-sky-500">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" aria-label="Obrir menú">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants} initial="hidden" animate="visible" exit="exit" className="w-full text-center">
                  {/* ✅ Canvi: <NavLink> passa a ser <Link> */}
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-500"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;