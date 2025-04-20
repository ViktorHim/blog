import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { Button } from "shared/uikit/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <aside
      className={classNames(styles.Sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
