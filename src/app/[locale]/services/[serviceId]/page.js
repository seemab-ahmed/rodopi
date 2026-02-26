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
import { VideoPlayer } from '@/components/VideoPlayer';

export default function ServicePage({ params }) {
  
  const { serviceId, locale } = params;
  const messages = locale === 'de' ? de : en;
  const service = messages?.services[serviceId];
  const serviceContent = service?.ServiceBaner;
  
  if (!service) return <div>Service not found</div>;

  // support optional videos similar to industries
  const topVideos = service?.videosTop || [];
  const bottomVideos = service?.videosBottom || [];

  // Create externalCta object conditionally
  const externalCta = serviceContent?.external_btn_text && serviceContent?.external_link 
    ? {
        label: serviceContent.external_btn_text,
        link: serviceContent.external_link
      }
    : undefined;

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
        externalCta={externalCta}
      />


      <GeneralContractorSection data={service?.GeneralContractor} />

      {topVideos.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-8">
          {topVideos.map((v, i) => (
            <VideoPlayer key={i} thumbnail={v.thumbnail} videoUrl={v.videoUrl} />
          ))}
        </div>
      )}

      <RodopiApproachSection service={service} />
      {/* <BenefitsServices data={service?.BenefitsServices} /> */}
      <ContactTeam data={service?.ContactTeam} />

      {bottomVideos.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-8">
          {bottomVideos.map((v, i) => (
            <VideoPlayer key={i} thumbnail={v.thumbnail} videoUrl={v.videoUrl} />
          ))}
        </div>
      )}

      <MapRodopi />
      {/* <KrebsGroupSection data={service?.KrebsGroup} /> */}
    </>
  )
}