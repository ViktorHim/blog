import { ThemeProvider } from '@app/providers/ThemeProvider';
import { Theme } from '@app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from '@shared/lib/classNames/classNames';
import { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = (Story, context) => {
    const selectedTheme = context.globals.theme || Theme.LIGHT;
    return (
        <ThemeProvider>
            <div
                className={classNames('app', [selectedTheme])}
                style={{ minHeight: 'auto' }}
            >
                <Story />
            </div>
        </ThemeProvider>
    );
};
