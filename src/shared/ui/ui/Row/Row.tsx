import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Row.module.css';

type RowAlign = 'start' | 'center' | 'end' | 'normal';
type Row = {
    align?: RowAlign;
    className?: string;
};

const CLASS_NAME_ALIGN_MAPPER: { [key in RowAlign]?: string } = {
    start: styles.row_align_start,
    center: styles.row_align_center,
    end: styles.row_align_end,
    normal: styles.row_align_normal,
};

export const Row: FC<PropsWithChildren<Row>> = (props) => {
    const { children, className, align = 'normal' } = props;

    return (
        <div className={clsx(styles.row, className, CLASS_NAME_ALIGN_MAPPER[align])}>
            {children}
        </div>
    );
};
