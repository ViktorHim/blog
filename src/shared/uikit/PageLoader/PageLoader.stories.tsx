import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    component: PageLoader,
    title: 'uikit/PageLoader',
    tags: ['autodocs'],
};

export default meta;

export type PageLoaderStory = StoryObj<typeof PageLoader>;

export const PrimaryPageLoader: PageLoaderStory = {};
