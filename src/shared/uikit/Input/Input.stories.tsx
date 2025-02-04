import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'uikit/Input',
    tags: ['autodocs'],
};

export default meta;

export type InputStory = StoryObj<typeof Input>;

export const PrimaryInput: InputStory = {
    args: {
        placeholder: 'Text',
    },
};
