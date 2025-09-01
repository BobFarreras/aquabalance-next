// src/components/contacte/ContactFormSection.jsx
"use client";

import React from 'react';
import { motion } from '@/lib/motion'; // ✅ Corregit
import ContactForm from './ContactForm';
import ContactSideInfo from './ContactSideInfo';

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <ContactForm />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <ContactSideInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;