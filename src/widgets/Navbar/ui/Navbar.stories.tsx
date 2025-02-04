import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    component: Navbar,
    title: 'widgets/Navbar',
    tags: ['autodocs'],
};

export default meta;

export type NavbarStory = StoryObj<typeof Navbar>;

export const Primary: NavbarStory = {};
