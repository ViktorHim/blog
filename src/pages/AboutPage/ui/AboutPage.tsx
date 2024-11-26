import { Title } from '@uikit/Title';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <section className="page">
            <Title>{t('About page')}</Title>
        </section>
    );
};

export default AboutPage;
