import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Button, Col, Container, Row } from '../../../../shared/ui';
import { GetVehiclesQuery, useGetVehiclesQuery } from '../../../../shared/api';
import { CardVehicle, SkeletonCardVehicle } from '../../../../entities/vehicle';
import { useShowMore } from '../../../../features/show-more';
import { Filter, Filters, useFilterParams } from '../../../../features/filter';

import styles from './CardsWithFilter.module.css';

const COUNT_OF_VIEW_CARDS = 6;

type VehiclesList = Exclude<GetVehiclesQuery['vehicles'], null | undefined>;
enum WidgetRole {
    IsLoading = 'IsLoading', // Дергаем ручку
    HasError = 'HasError', // Ошибка с бэка
    HasVehicles = 'HasVehicles', // Есть корабли
    NotHasVehicles = 'NotHasVehicles', // Массив с кораблями пустой
}

// Фильтр создан на уровне виджета, так как компонент <Filter /> может работать c любыми данными,
// которые соответствуют типу Filters
const getFilteredData = ({ filters, data }: { filters: Filters; data: VehiclesList }) => {
    const level = Object.keys(filters.level);
    const type = Object.keys(filters.type);
    const nation = Object.keys(filters.nation);

    return data.filter((vehicle) => {
        // Если фильтр пустой, то считаем, что он применен
        const hasLevel = level.length ? level.includes(String(vehicle?.level)) : true;
        const hasType = type.length ? type.includes(String(vehicle?.type?.name)) : true;
        const hasNation = nation.length ? nation.includes(String(vehicle?.nation?.name)) : true;

        return hasLevel && hasType && hasNation;
    });
};

// Весь контент в текущем виджете отображаем по роли
const calculateWidgetRole = ({
    isLoading,
    hasVehicles,
    hasError,
}: {
    isLoading: boolean;
    hasVehicles: boolean;
    hasError: boolean;
}) => {
    if (hasError) {
        return WidgetRole.HasError;
    }

    if (isLoading) {
        return WidgetRole.IsLoading;
    }

    if (hasVehicles) {
        return WidgetRole.HasVehicles;
    }

    return WidgetRole.NotHasVehicles;
};

export const CardsWithFilter: FC = () => {
    const { data, error, loading, refetch } = useGetVehiclesQuery();

    const vehiclesFromData = data?.vehicles ?? [];
    const vehiclesFromDataLength = vehiclesFromData.length;

    const { filtersFromParams: initFilters } = useFilterParams();
    const [isLoading, setIsLoading] = useState(loading);
    const [filters, setFilters] = useState<Filters>(initFilters);
    const [filteredVehicles, setFilteredVehicles] = useState<VehiclesList>([]);

    const {
        data: vehicles,
        handleClickToShowMore,
        handleClickToResetView,
    } = useShowMore({
        data: filteredVehicles,
        countOfView: COUNT_OF_VIEW_CARDS,
    });

    const canShowMoreButton = vehicles.length < filteredVehicles.length;
    const canShowResetViewButton = vehicles.length > COUNT_OF_VIEW_CARDS;
    const vehiclesSkeletons: string[] = Array(COUNT_OF_VIEW_CARDS).fill('');
    const widgetRole = calculateWidgetRole({
        isLoading,
        hasError: Boolean(error),
        hasVehicles: Boolean(vehicles.length),
    });

    const handleClickToRefetchData = () => {
        refetch();
    };

    useEffect(() => {
        if (vehiclesFromDataLength && !loading) {
            setIsLoading(false);
        }
    }, [loading, vehiclesFromDataLength]);

    useEffect(() => {
        if (vehiclesFromDataLength) {
            setFilteredVehicles(getFilteredData({ data: vehiclesFromData, filters }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, vehiclesFromDataLength]);

    if (widgetRole === WidgetRole.HasError) {
        return (
            <Container>
                <div className={clsx(styles.section, styles.section_theme_withError)}>
                    <p>Что-то пошло не так ...</p>
                    <Button onClick={handleClickToRefetchData}>Попробуйте еще раз</Button>
                </div>
            </Container>
        );
    }

    return (
        <div className={styles.section}>
            <Container>
                <Row>
                    <Col size={{ mediaTablet: 4, mediaDesktop: 3 }}>
                        <Filter
                            filters={filters}
                            setFilters={setFilters}
                            className={styles.filter}
                        />
                    </Col>
                    <Col size={{ mediaTablet: 8, mediaDesktop: 9 }}>
                        <ul className={styles.filterCounts}>
                            <li>
                                <b>Всего кораблей</b>: {vehiclesFromDataLength}
                            </li>
                            <li>
                                <b>Найдено кораблей</b>: {filteredVehicles.length}
                            </li>
                        </ul>
                        <Row>
                            {widgetRole === WidgetRole.IsLoading &&
                                vehiclesSkeletons.map((_, index) => (
                                    <Col
                                        size={{ mediaDesktop: 6, mediaDesktopLarge: 4 }}
                                        key={index}
                                    >
                                        <SkeletonCardVehicle className={styles.card} />
                                    </Col>
                                ))}

                            {widgetRole === WidgetRole.HasVehicles &&
                                vehicles.map((vehicle, index) => (
                                    <Col
                                        size={{ mediaDesktop: 6, mediaDesktopLarge: 4 }}
                                        key={index}
                                    >
                                        <CardVehicle {...vehicle} className={styles.card} />
                                    </Col>
                                ))}

                            {widgetRole === WidgetRole.NotHasVehicles && (
                                <Col className={styles.card}>Ничего не найдено 😢</Col>
                            )}
                        </Row>
                        {Boolean(vehicles.length) && (
                            <ul className={styles.buttons}>
                                {canShowMoreButton && (
                                    <li>
                                        <Button color="blue" onClick={handleClickToShowMore}>
                                            Показать еще {COUNT_OF_VIEW_CARDS} кораблей
                                        </Button>
                                    </li>
                                )}
                                {canShowResetViewButton && (
                                    <li>
                                        <Button color="red" onClick={handleClickToResetView}>
                                            Скрыть все
                                        </Button>
                                    </li>
                                )}
                            </ul>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
