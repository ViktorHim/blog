import type { Meta, StoryObj } from '@storybook/react';

import { Loader, LoaderTheme } from './Loader';

const meta: Meta<typeof Loader> = {
    component: Loader,
    title: 'uikit/Loader',
    tags: ['autodocs'],
    argTypes: {
        theme: {
            options: Object.values(LoaderTheme),
            control: { type: 'inline-radio' },
        },
    },
};

export default meta;

export type LoaderStory = StoryObj<typeof Loader>;

export const PrimaryLoader: LoaderStory = {
    args: {
        theme: LoaderTheme.PRIMARY,
    },
};

export const SecondaryLoader: LoaderStory = {
    args: {
        theme: LoaderTheme.SECONDARY,
    },
};
