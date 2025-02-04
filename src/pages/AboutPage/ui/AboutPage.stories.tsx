import type { Meta, StoryObj } from '@storybook/react';

import { AboutPageAsync as AboutPage } from './AboutPage.async';

const meta: Meta<typeof AboutPage> = {
    component: AboutPage,
    title: 'pages/AboutPage',
    tags: ['autodocs'],
};

export default meta;

export type AboutPageStory = StoryObj<typeof AboutPage>;

export const AboutPagePrimary: AboutPageStory = {};
