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

export default function ServicePage({ params }) {
  const serviceContent = useTranslations('ServiceBaner')

  const { serviceId, locale } = params;
  const messages = locale === 'de' ? de : en;
  const service = messages.services[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <HeroBannerSection
        backgroundImage="/images/a-woman-worker-in-a-wind-farm-green-energy-techn-2024-12-10-00-41-36-utc (2).jpg"
        badgeText="Welcome to RODOPI"
        title={serviceContent('title')}
        subtitle={serviceContent('subtitle')}
        primaryCta={{
          label: "Learn More",
        }}
        secondaryCta={{
          label: serviceContent('cta_button'),
          icon: <PhoneCall className="w-5 h-5 opacity-90" />,
        }}
      />
      <GeneralContractorSection/>
      <RodopiApproachSection/>
      <BenefitsServices/>
      <ContactTeam/>
      <MapRodopi/>
      <KrebsGroupSection/>
    </>
  )
}