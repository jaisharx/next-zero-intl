import { useTranslation } from 'next-zero-intl';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Card({ url, title, children }) {
    const { t } = useTranslation();
    return (
        <a href={url} className={styles.card}>
            <h2>{t(title)} &rarr;</h2>
            <p>{t(children)}</p>
        </a>
    );
}
