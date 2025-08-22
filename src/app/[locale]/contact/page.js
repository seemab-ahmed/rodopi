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

export default function ContactPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  console.log("ContactPage messages:", messages); // Debug: check messages object
  console.log("ContactPage messages.contact:", messages.contact); // add this line
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
      <LetsTalk data={industryData?.contact} />
      {/* <RodopiApproachSection service={industryData} /> */}
      {/* <BenefitsServices data={industryData?.BenefitsServices} /> */}
      {/* <GeneralServicesSection data={industryData?.GeneralServices} /> */}
      {/* <MapRodopi /> */}
      <KrebsGroupSection data={industryData?.KrebsGroup} />
    </>
  );
}
