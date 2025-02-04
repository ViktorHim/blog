import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    component: AppLink,
    title: 'uikit/Link',
    tags: ['autodocs'],
    argTypes: {
        theme: {
            options: Object.values(AppLinkTheme),
            control: { type: 'inline-radio' },
        },
    },
};

export default meta;

export type AppLinkStory = StoryObj<typeof AppLink>;

export const PrimaryLink: AppLinkStory = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Link',
    },
};

export const InvertedLink: AppLinkStory = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Link',
    },
};
