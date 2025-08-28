
import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { LegalNoticeSection } from '@/components/LegalNoticeSection';
import { TextContent } from '@/components/TextContent';

export default function LegalPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const legalData = messages?.legalnotic_page;
  if (!legalData) return <div>Contact page not found</div>;
  return (
    <>
      <LegalNoticeSection data={legalData?.LegalNoticeSection} />
      <TextContent data={legalData?.TextContent} />
    </>
  );
}
