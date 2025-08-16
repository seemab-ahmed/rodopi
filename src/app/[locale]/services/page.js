import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { RodopiApproachSection } from '@/components/RodopiApproach';
import { BenefitsServices } from '@/components/BenefitsServices';
import { ContactTeam } from '@/components/ContactTeam';
import MapRodopi from '@/components/MapRodopi';
import { KrebsGroupSection } from '@/components/KrebsGroup';
export default function ServicesMainPage({ params }) {
  const serviceId = "wind_maintenance";
  const locale = "en";
  const messages = locale === 'de' ? de : en;
  const service = messages?.services[serviceId];
  const serviceContent = service?.ServiceBaner;
  
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <HeroBannerSection
        backgroundImage={serviceContent.bgImage}
        badgeText={serviceContent.badgeText}
        title={serviceContent.title}
        subtitle={serviceContent.subtitle}
        primaryCta={{
          label: `${serviceContent.label}`,
        }}
        secondaryCta={{
          label: serviceContent.cta_button,
        }}
      />
    <GeneralContractorSection data={service?.GeneralContractor} />
    <RodopiApproachSection service={service} />
    <BenefitsServices data={service?.BenefitsServices} />
    <ContactTeam team={service?.ContactTeam?.members} />
    <MapRodopi />
    <KrebsGroupSection data={service?.KrebsGroup} />
    </>
  )
}
