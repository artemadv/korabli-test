import { FC } from 'react';
import clsx from 'clsx';

import { Vehicle } from '../../../../shared/api';
import { formatFirstSymbolToUppercase } from '../../../../shared/lib';

import styles from './CardVehicle.module.css';

type CardVehicle = Vehicle & {
    className?: string;
};

export const CardVehicle: FC<CardVehicle> = (props) => {
    const { className, icons, level, nation, type } = props;

    return (
        <article className={clsx(styles.card, className)}>
            {icons?.medium && (
                <div className={styles.card__imageWrapper}>
                    <img className={styles.card__image} src={icons.medium} alt="" />
                </div>
            )}
            <div className={styles.card__content}>
                <ul className={styles.card__list}>
                    {level && (
                        <li className={styles.card__item}>
                            <b>Уровень:</b> {level}
                        </li>
                    )}

                    {nation?.name && (
                        <li className={styles.card__item}>
                            <b>Страна:</b>
                            {formatFirstSymbolToUppercase(nation.name)}
                            {nation.icons?.large && (
                                <img
                                    className={styles.card__itemIcon}
                                    src={nation.icons.large}
                                    alt={nation.name}
                                />
                            )}
                        </li>
                    )}

                    {type?.name && (
                        <li className={styles.card__item}>
                            <b>Тип:</b>
                            {formatFirstSymbolToUppercase(type.name)}
                            {type.icons?.default && (
                                <img
                                    className={styles.card__itemIcon}
                                    src={type.icons.default}
                                    alt={type.name}
                                />
                            )}
                        </li>
                    )}
                </ul>
            </div>
        </article>
    );
};
