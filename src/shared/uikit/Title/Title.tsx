import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import classes from './Title.module.scss';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps {
    /**Title level (1 - 6)
     * Default is "1"
     */
    level?: HeadingLevel;
    /** Title classname */
    className?: string;
    /**Title children node */
    children: ReactNode;
}

export const Title = (props: TitleProps) => {
    const { level = 1, className, children } = props;

    // Dynamically select h1 - h6 HTML tag based on heading level.
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={classNames(classes.Title, [className])}>{children}</Tag>
    );
};
