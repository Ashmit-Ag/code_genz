import React from 'react';
import styles from '../app/contact/page.module.css';

const ContactForm: React.FC = () => {
  return (
    <div className={styles.formSection}>
      <h2 className={styles.heading}>Contact Us</h2>
      <form>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.column}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label htmlFor="whatsapp">WhatsApp Number</label>
            <input type="text" id="whatsapp" name="whatsapp" />
          </div>
          <div className={styles.column}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
