import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/uikit/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <aside
            className={classNames(classes.Sidebar, [className], {
                [classes.collapsed]: collapsed,
            })}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onToggle}>
                Toggle
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
            </div>
        </aside>
    );
};
