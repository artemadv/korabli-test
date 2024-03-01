import { FilterKeys } from '../../model/types';

export const isFilterKeysType = (key: FilterKeys | string): key is FilterKeys => {
    return (Object.values(FilterKeys) as string[]).includes(key);
};
