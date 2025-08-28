import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { PrivacyTextContent } from '@/components/PrivacyTextContent';

export default function Privacypage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const privacyData = messages?.privacy_page;

  if (!privacyData) return <div>Privacy page not found</div>;

  return (
    <>
      <PrivacyTextContent data={privacyData?.PrivacyTextContent} />
    </>
  );
}


