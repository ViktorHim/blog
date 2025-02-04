import { AppRoutes, routePath } from '@shared/config/routes/routeConfig';
import { classNames } from '@shared/lib/classNames/classNames';
import { AppLink } from '@shared/uikit/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(classes.Navbar, [className])}>
            <AppLink to={routePath[AppRoutes.MAIN]}>{t('Main')}</AppLink>
            <AppLink to={routePath[AppRoutes.ABOUT]}>{t('About')}</AppLink>
        </header>
    );
};
