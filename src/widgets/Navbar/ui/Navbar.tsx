import { RouteName, RoutePaths } from 'shared/config/routes/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, [className])}>
            <div className={styles.links}>
                <AppLink
                    to={RoutePaths[RouteName.MAIN]}
                    theme={AppLinkTheme.INVERTED}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={RoutePaths[RouteName.ABOUT]}
                    theme={AppLinkTheme.INVERTED}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
