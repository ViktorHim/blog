import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    component: PageError,
    title: 'widgets/PageError',
    tags: ['autodocs'],
};

export default meta;

export type PageErrorStory = StoryObj<typeof PageError>;

export const PrimaryPageError: PageErrorStory = {};
