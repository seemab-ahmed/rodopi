import { useTranslations } from 'next-intl';

const AboutPage = () => {
    const t = useTranslations('AboutPage');
    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>
        </div>
    )
}

export default AboutPage
