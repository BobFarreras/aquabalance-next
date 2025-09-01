
  
  // Aquest component principal pot ser un Component de Servidor
  // perquè només organitza altres components.
  import React from 'react';
  import PageWrapper from '@/components/PageWrapper';
  
  // Importem els subcomponents de la pàgina de contacte
  import ContactHero from '@/components/contact/ContactHero';
  import ContactInfo from '@/components/contact/ContactInfo';
  import ContactFormSection from '@/components/contact/ContactFormSection';
  
  const ContactePage = () => {
    return (
      <PageWrapper>
        <ContactHero />
        <ContactInfo />
        <ContactFormSection />
      </PageWrapper>
    );
  };
  
  export default ContactePage;