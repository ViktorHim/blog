import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPageAsync as NotFoundPage } from './NotFoundPage.async';

const meta: Meta<typeof NotFoundPage> = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
    tags: ['autodocs'],
};

export default meta;

export type NotFoundPageStory = StoryObj<typeof NotFoundPage>;

export const NotFoundPagePrimary: NotFoundPageStory = {};
