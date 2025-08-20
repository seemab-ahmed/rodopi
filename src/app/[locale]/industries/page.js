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
import {GeneralIndustriesSection} from "@/components/cards/GeneralIndustries"

export default function IndustriesMainPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  // Use a main industry key if you have one, or just show a list of industries
  const industryKey = 'main_industry';
  const industryData = messages?.industries[industryKey];
  const industryContent = industryData?.ServiceBaner;

  if (!industryData) return <div>Industry not found</div>;

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
      {/* <RodopiApproachSection service={industryData} /> */}
      {/* <BenefitsServices data={industryData?.BenefitsServices} /> */}
      <GeneralServicesSection data={industryData?.GeneralServices} />
      <MapRodopi />
      <KrebsGroupSection data={industryData?.KrebsGroup} />
    </>
  );
}
