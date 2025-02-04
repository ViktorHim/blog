import { classNames } from '@shared/lib/classNames/classNames';
import { Title } from '@shared/uikit/Title';
import { useTranslation } from 'react-i18next';

import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <section
            className={classNames('page', [classes.NotFoundPage, className])}
        >
            <Title level={1}>{t('Page not found')}</Title>
        </section>
    );
};

export default NotFoundPage;
