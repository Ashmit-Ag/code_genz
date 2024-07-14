import React from 'react';
import styles from './page.module.css';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className='flex flex-wrap flex-row lg:flex-row-reverse gap-5 p-5 sm:10 pt-20'>
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;