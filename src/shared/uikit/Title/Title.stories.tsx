import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
    component: Title,
    title: 'uikit/Title',
    tags: ['autodocs'],
    argTypes: {
        level: {
            options: [1, 2, 3, 4, 5, 6],
            control: { type: 'inline-radio' },
        },
    },
};

export default meta;

export type TitleStory = StoryObj<typeof Title>;

export const Primary: TitleStory = {
    args: {
        children: 'Title',
    },
};
