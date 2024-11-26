import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/uikit/Button';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Button
            className={className}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </Button>
    );
};
