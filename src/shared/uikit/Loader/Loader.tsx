import { classNames } from '@shared/lib/classNames/classNames';
import { SVGAttributes } from 'react';

import classes from './Loader.module.scss';

export enum LoaderTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LoaderProps extends SVGAttributes<SVGAElement> {
    className?: string;
    theme?: LoaderTheme;
}

export const Loader = (props: LoaderProps) => {
    const {
        className,
        theme = LoaderTheme.PRIMARY,
        width = 100,
        height = 100,
    } = props;

    return (
        <svg
            className={classNames(classes.Loader, [classes[theme], className])}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width={width}
            height={height}
        >
            <g>
                <path
                    stroke="none"
                    d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                >
                    <animateTransform
                        values="0 50 51;360 50 51"
                        keyTimes="0;1"
                        repeatCount="indefinite"
                        dur="1s"
                        type="rotate"
                        attributeName="transform"
                    ></animateTransform>
                </path>
                <g></g>
            </g>
        </svg>
    );
};
