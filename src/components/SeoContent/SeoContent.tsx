import React from 'react';
import styles from './SeoContent.module.css';

type Props = {
    children: React.ReactNode;
    lead?: React.ReactNode;
};

export const SeoContent = ({ children, lead }: Props) => {
    return (
        <section className={styles.section} aria-label="Дополнительная информация">
            {lead && <div className={styles.lead}>{lead}</div>}
            <div className={styles.list}>
                {children}
            </div>
        </section>
    );
};
