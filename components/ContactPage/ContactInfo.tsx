import React from 'react';
import styles from '../../app/contact/page.module.css';

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.infoSection}>
      <h2 className={styles.heading}>More Information</h2>
      <p className={styles.paragraph}>
        <strong>Address:</strong><br />
        Lucknow, Uttar Pradesh India
      </p>
      <p className={styles.paragraph}>
        <strong>Contact Number:</strong><br />
        +91 9336576683
      </p>
      <p className={styles.paragraph}>
        <strong>Email ID:</strong><br />
        services.codealpha@gmail.com<br />
        support@codealpha.tech
      </p>
    </div>
  );
};

export default ContactInfo;
