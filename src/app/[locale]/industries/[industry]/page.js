import ServiceTemplate from '@/components/ServiceTemplate';
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import HeroBanner from '@/components/HeroBanner';
import { HeroBannerSection } from '@/components/BannerSection';
import { ArrowRight, PhoneCall } from "lucide-react"
import { useTranslations } from 'next-intl'
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { RodopiApproachSection } from '@/components/RodopiApproach';
import { BenefitsServices } from '@/components/BenefitsServices';
import { ContactTeam } from '@/components/ContactTeam';
import MapRodopi from '@/components/MapRodopi';
import { KrebsGroupSection } from '@/components/KrebsGroup';

export default function industriesPage({ params }) {
  const { industry, locale } = params;
  const messages = locale === 'de' ? de : en;
  const industryData = messages?.industries[industry];
  const industriesContent = industryData?.ServiceBaner;

  if (!industryData) return <div>industries not found</div>;

  return (
    <>
      <HeroBannerSection
        backgroundImage={industriesContent?.bgImage}
        badgeText={industriesContent?.badgeText}
        title={industriesContent?.title}
        subtitle={industriesContent?.subtitle}
        primaryCta={{
          label: industriesContent?.label,
        }}
        secondaryCta={{
          label: industriesContent?.cta_button,
        }}
      />
      <GeneralContractorSection data={industryData?.GeneralContractor} />
  <RodopiApproachSection service={industryData} />
      <BenefitsServices data={industryData?.BenefitsServices} />
      <ContactTeam data={industryData?.ContactTeam} />
      <MapRodopi />
      <KrebsGroupSection data={industryData?.KrebsGroup} />
    </>
  );
}