import ServiceTemplate from '@/components/ServiceTemplate';
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import HeroBanner from '@/components/HeroBanner';

export default function ServicePage({ params }) {
  const { serviceId, locale } = params;
  const messages = locale === 'de' ? de : en;
  const service = messages.services[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <>
    <HeroBanner  />
    <ServiceTemplate serviceData={service} />
    </>
  )
}