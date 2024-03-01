export enum FilterKeys {
    Level = 'level',
    Type = 'type',
    Nation = 'nation',
}

export interface FilterCheckBox {
    checked: boolean;
}

export interface FilterValue {
    value: string;
}

export type Filters = {
    [key in FilterKeys]: {
        [key: string]: FilterCheckBox | FilterValue;
    };
};
