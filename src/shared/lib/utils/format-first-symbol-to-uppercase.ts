export const formatFirstSymbolToUppercase = (value: string) => {
    if (!value.length) return value;

    return value[0].toUpperCase() + value.slice(1, value.length);
};
