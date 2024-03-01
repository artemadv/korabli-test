import { FC } from 'react';

import { Header } from '../../../../widgets/header';
import { Footer } from '../../../../widgets/footer';
import { CardsWithFilter } from '../../../../widgets/cards-with-filter';
import { Container } from '../../../../shared/ui';

import styles from './Home.module.css';

export const Home: FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.page__content}>
                <Container className={styles.page__section}>
                    <h1 className={styles.page__title}>Найди свой идеальный корабль!</h1>
                </Container>

                <CardsWithFilter />
            </main>
            <Footer className={styles.page__footer} />
        </div>
    );
};
