import { Link } from 'react-router-dom';

import { AppRoutes, routePath } from '@/shared/consts/routes/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <header className={classNames(classes.Navbar, [className])}>
            <Link to={routePath[AppRoutes.MAIN]}>Главная</Link>
            <Link to={routePath[AppRoutes.ABOUT]}>О нас</Link>
            <ThemeSwitcher />
        </header>
    );
};
