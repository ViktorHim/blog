import { Title } from '@shared/uikit/Title';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <section className="page">
            <Title level={1}>{t('Main page')}</Title>
        </section>
    );
};

export default MainPage;
