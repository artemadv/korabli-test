/* eslint-disable prettier/prettier */
import { useSearchParams } from 'react-router-dom';

import { EMPTY_FILTERS } from '../../model/constants';
import { isFilterKeysType } from '../utils/type-guards';
import { FilterKeys, Filters } from '../../model/types';
import { VehicleNation, VehicleType } from '../../../../entities/vehicle';

const createFiltersFromParams = (searchParams: URLSearchParams) => {
    const result = {
        ...EMPTY_FILTERS,
    };

    for (const [key, params] of searchParams.entries()) {
        if (!isFilterKeysType(key)) {
            continue;
        }

        const filter = params.split(',').reduce(
            (acc, param) => {
                const canAddLevel = key === FilterKeys.Level && !Number.isNaN(param);
                const canAddType =
                    key === FilterKeys.Type &&
                    Object.values(VehicleType).includes(param as VehicleType);
                const canAddNation =
                    key === FilterKeys.Nation &&
                    Object.values(VehicleNation).includes(param as VehicleNation);

                if (!acc[param] && (canAddLevel || canAddType || canAddNation)) {
                    acc[param] = {
                        checked: true,
                    };
                }

                return acc;
            },
            {} as Filters['level'],
        );

        result[key] = {
            ...filter,
        };
    }

    return result;
};

const getClearFilterParams = (searchParams: URLSearchParams) => {
    const newSearchParams = Object.fromEntries(searchParams);

    Object.keys(newSearchParams).forEach((key) => {
        if (isFilterKeysType(key)) {
            delete newSearchParams[key];
        }
    });

    return new URLSearchParams(newSearchParams);
};

const getAddedFilterParam = (searchParams: URLSearchParams, key: string, dataId: string) => {
    const newSearchParams = Object.fromEntries(searchParams);
    const param = newSearchParams[key] ?? '';
    const paramList = param.split(',');

    if (!paramList.includes(dataId)) {
        paramList.push(dataId);
    }

    return new URLSearchParams({
        ...newSearchParams,
        [key]: paramList.join(',').replace(/^,/, ''),
    });
};

const getRemovedFilterParam = (searchParams: URLSearchParams, key: string, dataId: string) => {
    const newSearchParams = Object.fromEntries(searchParams);
    const param = newSearchParams[key] ?? '';
    const paramList = param.split(',');
    const filteredParamList = paramList.filter((paramId) => paramId !== dataId);

    if (!filteredParamList.length) {
        delete newSearchParams[key];
    }

    return new URLSearchParams({
        ...newSearchParams,
        ...(filteredParamList.length
            ? {
                [key]: filteredParamList.join(',').replace(/^,/, ''),
            }
            : {}),
    });
};

export const useFilterParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return {
        filtersFromParams: createFiltersFromParams(searchParams),
        resetFilterParams: () => {
            setSearchParams(getClearFilterParams(searchParams));
        },
        addFilterParam: (key: string, dataId: string) => {
            setSearchParams(getAddedFilterParam(searchParams, key, dataId));
        },
        removeFilterParam: (key: string, dataId: string) => {
            setSearchParams(getRemovedFilterParam(searchParams, key, dataId));
        },
    };
};
