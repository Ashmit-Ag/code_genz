import React from 'react';
import ContactInfo from '@/components/ContactPage/ContactInfo';
import ContactForm from '@/components/ContactPage/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className='flex flex-wrap flex-row lg:flex-row-reverse gap-5 p-5 sm:10 pt-20'>
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;