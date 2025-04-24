import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';
import { Button } from 'shared/uikit/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;

    const refreshPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(styles.PageError, [className])}>
            <p className={styles.errorText}>Произошла непредвиденная ошибка</p>
            <Button onClick={refreshPage}>Обновить страницу</Button>
        </div>
    );
};
