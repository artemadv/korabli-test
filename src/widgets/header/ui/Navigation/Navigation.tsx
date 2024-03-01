import { FC } from 'react';
import clsx from 'clsx';

import styles from './Navigation.module.css';

const FAKE_NAVIGATION_ITEMS = [
    {
        name: 'Новости',
    },
    {
        name: 'Игра',
    },
    {
        name: 'Сообщество',
    },
    {
        name: 'Наши соцсети',
    },
    {
        name: 'Пригласить друга',
    },
];

type Navigation = {
    className?: string;
};

export const Navigation: FC<Navigation> = ({ className }) => {
    return (
        <nav className={clsx(styles.navigation, className)}>
            <ul className={styles.navigation__list}>
                {FAKE_NAVIGATION_ITEMS.map(({ name }) => (
                    <li key={name}>
                        <span className={styles.navigation__fakeLink}>{name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
