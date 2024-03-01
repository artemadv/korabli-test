import { VehicleType, VehicleNation } from '../../../../entities/vehicle';
import { FilterValue } from '../../model/types';

const createLevel = (maxValue: number) => {
    const level: { [key: string]: FilterValue } = {};
    let i = 1;

    while (i <= maxValue) {
        level[i] = {
            value: String(i),
        };
        i += 1;
    }

    return level;
};

const createStringFilterItem = (items: string[]) => {
    const type: { [key: string]: FilterValue } = {};

    items.forEach((typeItem) => {
        type[typeItem] = {
            value: typeItem,
        };
    });

    return type;
};

export const createFilterData = () => {
    return {
        type: { ...createStringFilterItem(Object.values(VehicleType)) },
        nation: { ...createStringFilterItem(Object.values(VehicleNation)) },
        level: { ...createLevel(11) },
    };
};
