import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type ButtonColor = 'red' | 'blue';

export type Button = {
    onClick?: () => void;
    className?: string;
    type?: HTMLButtonElement['type'];
    color?: ButtonColor;
    disabled?: boolean;
};

const CLASS_NAME_COLOR_MAPPER: { [key in ButtonColor]: string } = {
    red: styles.button_theme_red,
    blue: styles.button_theme_blue,
};

export const Button: FC<PropsWithChildren<Button>> = (props) => {
    const { children, className, type = 'button', onClick, color = 'blue', disabled } = props;

    return (
        <button
            type={type}
            className={clsx(styles.button, className, CLASS_NAME_COLOR_MAPPER[color])}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
