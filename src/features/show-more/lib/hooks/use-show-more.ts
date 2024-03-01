import { useEffect, useState } from 'react';

export const useShowMore = <T>({
    data: defaultData,
    countOfView: defaultCountOfView,
}: {
    data: T[];
    countOfView: number;
}) => {
    const [data, setData] = useState<T[]>(defaultData);
    const [countOfView, setCountOfView] = useState(defaultCountOfView);

    const dataLength = defaultData.length;

    const handleClickToShowMore = () => {
        const newCountOfView = countOfView + defaultCountOfView;

        if (newCountOfView < dataLength) {
            setCountOfView(newCountOfView);

            return;
        }

        setCountOfView(dataLength);
    };
    const handleClickToResetView = () => {
        setCountOfView(defaultCountOfView);
    };

    useEffect(() => {
        if (dataLength) {
            setData(defaultData.slice(0, countOfView));

            return;
        }

        setData(defaultData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countOfView, dataLength]);

    return {
        data,
        handleClickToShowMore,
        handleClickToResetView,
    };
};
