import { FC } from 'react';
import clsx from 'clsx';

import { Container } from '../../../../shared/ui';

import styles from './Footer.module.css';

type Footer = {
    className?: string;
};

export const Footer: FC<Footer> = ({ className }) => {
    return (
        <footer className={clsx(styles.footer, className)}>
            <Container>
                <p>Морские приключения ждут!</p>
            </Container>
        </footer>
    );
};
