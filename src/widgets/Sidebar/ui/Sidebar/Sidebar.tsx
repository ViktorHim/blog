import { useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/uikit/Button';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';
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
            data-testid="sidebar"
            className={classNames(classes.Sidebar, [className], {
                [classes.collapsed]: collapsed,
            })}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.OUTLINE}
                onClick={onToggle}
            >
                Toggle
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </aside>
    );
};
