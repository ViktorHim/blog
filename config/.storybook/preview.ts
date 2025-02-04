import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: Object.values(Theme),
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: Theme.LIGHT,
    },

    decorators: [
        ThemeDecorator,
        TranslationDecorator,
        RouterDecorator,
        StyleDecorator,
    ],
};

export default preview;

export const decorators = [
    ThemeDecorator,
    TranslationDecorator,
    RouterDecorator,
    StyleDecorator,
];
