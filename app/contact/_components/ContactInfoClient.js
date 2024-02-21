'use client';

import ContactCard from '@/app/contact/_components/ContactCard';
import ContactCardLoading from '@/app/contact/_components/ContactCardLoading';
import { useEffect, useState } from 'react';

const ContactInfoClient = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/miscellaneous-data');
      const data = await response.json();
      if (data?.contact) {
        setContactInfo(data.contact);
      }
    })();
  }, []);

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-3 mx-auto lg:w-3/4 mt-6'>
      {contactInfo.email ? (
        <>
          <ContactCard contactInfo={contactInfo?.email}>Email</ContactCard>
          <ContactCard contactInfo={contactInfo?.phone}>Phone</ContactCard>
          <ContactCard contactInfo={contactInfo?.whatsApp}>
            WhatsApp
          </ContactCard>
          <ContactCard contactInfo={contactInfo?.address}>Address</ContactCard>
        </>
      ) : (
        <ContactCardLoading />
      )}
    </div>
  );
};
export default ContactInfoClient;
