import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'widgets/Sidebar',
    tags: ['autodocs'],
};

export default meta;

export type SidebarStory = StoryObj<typeof Sidebar>;

export const Primary: SidebarStory = {};
