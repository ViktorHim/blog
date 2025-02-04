import type { Meta, StoryObj } from '@storybook/react';

import { MainPageAsync as MainPage } from './MainPage.async';

const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: 'pages/MainPage',
    tags: ['autodocs'],
};

export default meta;

export type MainPageStory = StoryObj<typeof MainPage>;

export const MainPagePrimary: MainPageStory = {};
