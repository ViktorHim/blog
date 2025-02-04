import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    component: ThemeSwitcher,
    title: 'widgets/ThemeSwitcher',
    tags: ['autodocs'],
};

export default meta;

export type ThemeSwitcherStory = StoryObj<typeof ThemeSwitcher>;

export const Primary: ThemeSwitcherStory = {};
