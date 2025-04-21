import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink = (props: AppLinkProps) => {
    const { to, theme = AppLinkTheme.PRIMARY, className, children, ...othersProps } = props;
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, [className, styles[theme]])}
            {...othersProps}
        >
            {children}
        </Link>
    );
};
