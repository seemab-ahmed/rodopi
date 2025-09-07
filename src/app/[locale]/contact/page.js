import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { ContactTeam } from '@/components/ContactTeam';
import { LetsTalk } from '@/components/LetsTalkSection';
import { RegionalContacts } from '@/components/RegionalContacts';

export default function ContactPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const industryData = messages?.contact_page;
  const industryContent = industryData?.ServiceBaner;

  if (!industryData) return <div>Contact page not found</div>;

  return (
    <>
      <HeroBannerSection
        backgroundImage={industryContent?.bgImage}
        badgeText={industryContent?.badgeText}
        title={industryContent?.title}
        subtitle={industryContent?.subtitle}
        primaryCta={{
          label: industryContent?.label,
        }}
        secondaryCta={{
          label: industryContent?.cta_button,
        }}
      />
      <GeneralContractorSection data={industryData?.GeneralContractor} />
      <RegionalContacts data={industryData?.RegionalContacts} />
      <LetsTalk data={industryData?.contact} />
      <ContactTeam data={industryData?.ContactTeam} />
    </>
  );
}
