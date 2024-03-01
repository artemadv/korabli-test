import { FC } from 'react';

import { Button, Col, Container, Row } from '../../../../shared/ui';
import { Navigation } from '../Navigation';

import styles from './Header.module.css';

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Row align="center">
                    <Col
                        order={{ default: 1, mediaDesktop: 1 }}
                        size={{ default: 6, mediaDesktop: 3, mediaDesktopLarge: 2 }}
                    >
                        <span className={styles.header__logo}>⛵ Мир кораблей</span>
                    </Col>
                    <Col
                        order={{ default: 2, mediaDesktop: 3 }}
                        size={{ default: 6, mediaDesktop: 3, mediaDesktopLarge: 2 }}
                    >
                        <div className={styles.header__buttonWrapper}>
                            <Button color="red">Играй бесплатно</Button>
                        </div>
                    </Col>
                    <Col
                        order={{ default: 3, mediaDesktop: 2 }}
                        size={{ default: 12, mediaDesktop: 6, mediaDesktopLarge: 8 }}
                    >
                        <Navigation className={styles.header__navigation} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
