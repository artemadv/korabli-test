/*
 * Типы сгенерированные автоматически Vehicle['types']['name'] и Vehicle['nation']['name'] - это строки,
 * поэтому для явной типизации добавил enum
 */

export enum VehicleType {
    Submarine = 'submarine',
    Destroyer = 'destroyer',
    Cruiser = 'cruiser',
    Battleship = 'battleship',
    Aircarrier = 'aircarrier',
}

export enum VehicleNation {
    Japan = 'japan',
    Usa = 'usa',
    Ussr = 'ussr',
    Germany = 'germany',
    Uk = 'uk',
    France = 'france',
    PanAsia = 'pan_asia',
    Italy = 'italy',
    Commonwealth = 'commonwealth',
    PanAmerica = 'pan_america',
    Europe = 'europe',
    Netherlands = 'netherlands',
    Spain = 'spain',
}
