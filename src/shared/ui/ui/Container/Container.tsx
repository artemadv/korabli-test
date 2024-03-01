import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Container.module.css';

type Container = {
    className?: string;
    fullWidth?: boolean;
};

export const Container: FC<PropsWithChildren<Container>> = (props) => {
    const { children, fullWidth, className } = props;

    return (
        <div
            className={clsx(styles.container, className, {
                [styles.container_fullWidth]: fullWidth,
            })}
        >
            {children}
        </div>
    );
};
