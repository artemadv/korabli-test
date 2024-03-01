import { FC } from 'react';
import clsx from 'clsx';

import { Button, CheckBox } from '../../../../shared/ui';
import { formatFirstSymbolToUppercase } from '../../../../shared/lib';
import { FilterCheckBox, FilterKeys, Filters } from '../../model/types';
import { createFilterData } from '../../lib/utils/create-filter-data';
import { EMPTY_FILTERS } from '../../model/constants';
import { isFilterKeysType } from '../../lib/utils/type-guards';
import { useFilterParams } from '../../lib/hooks/use-filter-params';

import styles from './Filter.module.css';

type Filter = {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    className?: string;
};

const LEGEND_MAPPER = {
    [FilterKeys.Level]: 'Уровень',
    [FilterKeys.Type]: 'Тип',
    [FilterKeys.Nation]: 'Страна',
};

export const Filter: FC<Filter> = (props) => {
    const { className, filters, setFilters } = props;

    const { resetFilterParams, addFilterParam, removeFilterParam } = useFilterParams();
    const filterData = createFilterData();

    const handleChangeFilter = (key: FilterKeys) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const {
                target: {
                    dataset: { id },
                    checked,
                },
            } = event;

            const newFilters = {
                ...filters,
                [key]: {
                    ...filters[key],
                },
            };

            if (id && newFilters[key][id] && !checked) {
                removeFilterParam(key, id);
                delete newFilters[key][id];
            }

            if (id && checked) {
                addFilterParam(key, id);
                newFilters[key][id] = {
                    checked,
                };
            }

            setFilters(newFilters);
        };
    };
    const handleClickToReset = () => {
        resetFilterParams();
        setFilters(EMPTY_FILTERS);
    };

    return (
        <div className={clsx(styles.filter, className)}>
            <h3 className={styles.filter__title}>Фильтр</h3>

            {Object.entries(filterData).map(([key, filter]) => {
                if (!isFilterKeysType(key)) {
                    return null;
                }

                return (
                    <fieldset className={styles.filter__fieldset} key={key}>
                        <legend className={styles.filter__legend}>{LEGEND_MAPPER[key]}</legend>

                        {Object.entries(filter).map(([dataId, { value }]) => (
                            <CheckBox
                                key={dataId}
                                dataId={dataId}
                                onChange={handleChangeFilter(key)}
                                checked={Boolean((filters[key][dataId] as FilterCheckBox)?.checked)} // По-хорошему тайп гуард написать
                            >
                                {formatFirstSymbolToUppercase(value)}
                            </CheckBox>
                        ))}
                    </fieldset>
                );
            })}

            <Button color="red" className={styles.filter__button} onClick={handleClickToReset}>
                Сбросить фильтр
            </Button>
        </div>
    );
};
