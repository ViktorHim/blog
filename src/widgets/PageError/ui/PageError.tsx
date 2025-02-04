import { classNames } from '@shared/lib/classNames/classNames';
import { Button } from '@shared/uikit/Button';
import { Title } from '@shared/uikit/Title';
import { useTranslation } from 'react-i18next';

import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(classes.PageError, [className])}>
            <Title>{t('An unexpected error occurred')}</Title>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    );
};
