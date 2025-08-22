import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { RodopiApproachSection } from '@/components/RodopiApproach';
import { BenefitsServices } from '@/components/BenefitsServices';
import { ContactTeam } from '@/components/ContactTeam';
import MapRodopi from '@/components/MapRodopi';
import { KrebsGroupSection } from '@/components/KrebsGroup';
import { GeneralServicesSection } from '@/components/cards/GeneralServices';
import { GeneralIndustriesSection } from "@/components/cards/GeneralIndustries"
import { LetsTalk } from '@/components/LetsTalkSection';
import { RegionalContacts } from '@/components/RegionalContacts';

export default function ContactPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  // Corrected: get contact_page from top-level, not industries
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
      {/* <RegionalContacts data={messages?.regional_contacts} /> */}
      {/* <BenefitsServices data={industryData?.BenefitsServices} /> */}
      <RegionalContacts data={industryData?.RegionalContacts} />
      <LetsTalk data={industryData?.contact} />
      {/* <RodopiApproachSection service={industryData} /> */}
      {/* <GeneralServicesSection data={industryData?.GeneralServices} /> */}
      {/* <MapRodopi /> */}
      <ContactTeam data={industryData?.ContactTeam} />
      {/* <KrebsGroupSection data={industryData?.KrebsGroup} /> */}
    </>
  );
}
