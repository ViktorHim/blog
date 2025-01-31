import { ButtonHTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button classname */
    className?: string;
    /** Button theme */
    theme?: ButtonTheme;
    /** Children node */
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        disabled,
        ...othersProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(classes.Button, [classes[theme], className], {
                disabled,
            })}
            {...othersProps}
        >
            {children}
        </button>
    );
};
