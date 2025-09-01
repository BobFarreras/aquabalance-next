

// src/app/aigua-kangen/page.js
"use client"; // Important! Perquè utilitza hooks com 'useTranslation'

import React from 'react';
// Hem eliminat 'Helmet', ja no es necessita
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Droplets, Zap, Wind } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image'; // Importem el component Image de Next.js

// Aquest component ja no rep 't' com a prop, el crida directament
const AiguaKangenPage = () => {
  const { t } = useTranslation();

  const waterTypes = t('kangenPage.waterTypes.list', { returnObjects: true });
  const howItWorksSteps = t('kangenPage.howItWorks.steps', { returnObjects: true });

  return (
    <PageWrapper>
      {/* El <Helmet> desapareix. Les metadades es gestionen a Next.js de manera diferent */}
      
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('kangenPage.hero.title')}{' '}
                <span className="text-transparent 4xl bg-clip-text water-gradient">Kangen®</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">{t('kangenPage.hero.subtitle')}</p>
          
              
            </motion.div>
            <motion.div>
                <Image 
                    alt={t('kangenPage.hero.imageAlt')} 
                    className="w-full h-auto rounded-2xl shadow-2xl" 
                    src="https://res.cloudinary.com/dvqhfapep/image/upload/v1751617789/ChatGPT_Image_4_jul_2025_10_29_34_ck04he.png"
                    width={600} // Afegeix amplada i alçada
                    height={400}
                />
            </motion.div>
          </div>
        </div>
      </section>

{/* Water Types Section 5 tipus */}
<section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('kangenPage.waterTypes.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('kangenPage.waterTypes.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(waterTypes) && waterTypes.map((water, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-full h-3 ${water.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{water.name}</h3>
                <p className="text-gray-600 mb-4">{water.description}</p>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700">{t('kangenPage.waterTypes.usesLabel')}</span>
                  <ul className="text-sm text-gray-600">
                    {water.uses.map((use, useIndex) => (
                      <li key={useIndex} className=" text-lg flex items-center">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          {/* ✅ IMATGE CORREGIDA */}
          <Image 
                      alt={t('kangenPage.howItWorks.imageAlt')} 
                      className="w-full h-auto rounded-2xl shadow-xl object-cover" 
                      src="https://images.unsplash.com/photo-1674231008005-3e067be6f19a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      width={1170} // Afegeix amplada i alçada
                      height={780}
                    />            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('kangenPage.howItWorks.title')}</h2>
              <p className="text-lg text-gray-600 mb-10">{t('kangenPage.howItWorks.subtitle')}</p>
              <div className="space-y-8">
                {Array.isArray(howItWorksSteps) && howItWorksSteps.map((step, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-600">
                      {index === 0 && <Zap className="w-6 h-6" />}
                      {index === 1 && <Wind className="w-6 h-6" />}
                      {index === 2 && <Droplets className="w-6 h-6" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AiguaKangenPage;