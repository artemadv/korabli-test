import { FC, PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';

import { Range } from '../../types/grid';

import styles from './Col.module.css';

type Breakpoints = 'default' | 'mediaMobile' | 'mediaTablet' | 'mediaDesktop' | 'mediaDesktopLarge'; // 576 | 992 | 1280 | 1440
type Size<T> = {
    [key in Breakpoints]?: T;
};
type ColSize = Size<Range<1, 13>>;
type ColOrder = Size<Range<1, 13> | 'initial'>;
type Col = {
    size?: ColSize;
    order?: ColOrder;
    className?: string;
};

const createClassNames = ({ size, order }: Required<Pick<Col, 'order' | 'size'>>) => {
    const classNames: string[] = [];

    Object.entries(size).forEach(([breakpoint, colSize]) => {
        classNames.push(styles[`col_size_${breakpoint}-${colSize}`]);
    });

    Object.entries(order).forEach(([breakpoint, colOrder]) => {
        classNames.push(styles[`col_order_${breakpoint}-${colOrder}`]);
    });

    return classNames;
};

const DEFAULT_COL_SIZE: ColSize = { default: 12 };
const DEFAULT_COL_ORDER: ColOrder = { default: 'initial' };

export const Col: FC<PropsWithChildren<Col>> = (props) => {
    const { children, size, order, className } = props;
    const memoizedCol = useMemo(
        () => ({
            size: {
                ...DEFAULT_COL_SIZE,
                ...(size || {}),
            },
            order: {
                ...DEFAULT_COL_ORDER,
                ...(order || {}),
            },
        }),
        [size, order],
    );

    return (
        <div className={clsx(styles.col, className, ...createClassNames(memoizedCol))}>
            {children}
        </div>
    );
};
