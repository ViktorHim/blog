import { classNames } from '@shared/lib/classNames/classNames';
import { InputHTMLAttributes } from 'react';

import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = (props: InputProps) => {
    const { type, className, placeholder } = props;
    return (
        <input
            className={classNames(classes.Input, [className])}
            type={type}
            placeholder={placeholder}
        />
    );
};
