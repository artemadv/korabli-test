import { FC, PropsWithChildren, useEffect, useId, useState } from 'react';
import clsx from 'clsx';

import styles from './CheckBox.module.css';

type CheckBox = {
    dataId?: string;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CheckBox: FC<PropsWithChildren<CheckBox>> = (props) => {
    const { children, className, onChange, dataId, checked, ...otherProps } = props;

    const [isChecked, setIsChecked] = useState(Boolean(checked));
    const id = useId();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { checked: checkedFromTarget },
        } = event;
        onChange?.(event);
        setIsChecked(checkedFromTarget);
    };

    useEffect(() => {
        setIsChecked(Boolean(checked));
    }, [checked]);

    return (
        <>
            <label
                htmlFor={id}
                className={clsx(styles.label, className, isChecked && styles.label_theme_isChecked)}
            >
                {children}
            </label>
            <input
                {...otherProps}
                checked={isChecked}
                id={id}
                type="checkbox"
                className={styles.input}
                onChange={handleChange}
                data-id={dataId}
            />
        </>
    );
};
