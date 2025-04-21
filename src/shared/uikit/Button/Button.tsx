import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className, children, theme = ButtonTheme.CLEAR, ...otherProps } = props;
    return (
        <button
            className={classNames(styles.Button, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
