import { classNames } from '@shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';

import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        children,
        to,
        className,
        theme = AppLinkTheme.INVERTED,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, [classes[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
