import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { AppRoutes, routePath } from '@/shared/consts/routes/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(classes.Navbar, [className])}>
            <Link to={routePath[AppRoutes.MAIN]}>{t('Main')}</Link>
            <Link to={routePath[AppRoutes.ABOUT]}>{t('About')}</Link>
        </header>
    );
};
