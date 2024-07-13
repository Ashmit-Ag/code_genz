import React from 'react';
import styles from './page.module.css';
import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;