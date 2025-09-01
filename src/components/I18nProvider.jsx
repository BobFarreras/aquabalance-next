// src/components/I18nProvider.jsx
"use client";

import React, { useEffect } from 'react';
import i18n from '@/i18n'; // La teva configuració d'i18n

const I18nProvider = ({ children }) => {
  useEffect(() => {
    // Aquesta inicialització és suficient per al costat del client
  }, []);

  return <>{children}</>;
};

export default I18nProvider;