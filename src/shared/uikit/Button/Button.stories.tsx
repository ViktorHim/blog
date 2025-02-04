import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'uikit/Button',
    tags: ['autodocs'],
    argTypes: {
        theme: {
            options: Object.values(ButtonTheme),
            control: { type: 'inline-radio' },
        },
    },
};

export default meta;

export type ButtonStory = StoryObj<typeof Button>;

export const Outline: ButtonStory = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};

export const Clear: ButtonStory = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};
