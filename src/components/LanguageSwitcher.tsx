import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex gap-2 p-2 overflow-x-auto">
            {languages.map((lang) => (
                <Button
                    key={lang.code}
                    variant={i18n.language === lang.code ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className="flex items-center gap-2"
                >
                    <span>{lang.flag}</span>
                    <span className="hidden sm:inline">{lang.name}</span>
                </Button>
            ))}
        </div>
    );
}
