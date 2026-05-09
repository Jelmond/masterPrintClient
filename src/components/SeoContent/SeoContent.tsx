import React from 'react';
import styles from './SeoContent.module.css';

type Props = {
    children: React.ReactNode;
};

export const SeoContent = ({ children }: Props) => {
    return (
        <section className={styles.section} aria-label="Дополнительная информация">
            <div className={styles.list}>
                {children}
            </div>
        </section>
    );
};
