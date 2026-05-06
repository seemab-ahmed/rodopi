import { useTranslations } from 'next-intl';
import HeroBanner from '@/components/HeroBanner';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import NewsSection from '@/components/NewsSection';
import CareerSection from '@/components/CareerSection';
import InfoCompany from '@/components/InfoCompany';
import MapRodopi from '@/components/MapRodopi';
// import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import GeneralExplanationSection from '@/components/GeneralExplanationSection';
import StatsSection from '@/components/StatsSection';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const stats = [
    { target: 600, label: 'employees', suffix: '+' },
    { target: 550, label: 'technicians', suffix: '+' },
    { target: 10, label: 'languages', suffix: '+' },
    { target: 5, label: 'headcount_churn', suffix: '%', prefix: '<' },
  ];
  return (
    <div>
      <HeroBanner />
      <GeneralExplanationSection />
      {/* <GenerelContent /> */}
      <VideoPlayer thumbnail='' videoUrl='https://youtu.be/-SK7m0WLNC0' />
      <InfoCompany />
      <StatsSection stats={stats} />
      {/* <ServicesSection /> */}
      <IndustriesSection />
      <LanguageSwitcher />
      <NewsSection />
      <CareerSection />
      <MapRodopi />
      {/* </section> */}
    </div>
  );
}
