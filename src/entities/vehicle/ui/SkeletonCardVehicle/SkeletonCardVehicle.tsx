import { FC } from 'react';
import clsx from 'clsx';

import styles from './SkeletonCardVehicle.module.css';

type SkeletonCardVehicle = {
    className?: string;
};

export const SkeletonCardVehicle: FC<SkeletonCardVehicle> = (props) => {
    const { className } = props;

    return <div className={clsx(styles.skeleton, className)} />;
};
