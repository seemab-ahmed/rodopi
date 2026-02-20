import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import GenerelContent from '@/components/GenerelContent';
import ServicesCard from '@/components/ServicesCard';
import Image from 'next/image';
import ClientsSection from '@/components/ClientsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import QualitySection from '@/components/QualitySection';
import NewsSection from '@/components/NewsSection';
import CareerSection from '@/components/CareerSection';
import InfoCompany from '@/components/InfoCompany';
import MapRodopi from '@/components/MapRodopi';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import GeneralExplanationSection from '@/components/GeneralExplanationSection';
import StatsSection from '@/components/StatsSection';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const stats = [
    { target: 500, label: 'employees', suffix: '+' },
    { target: 450, label: 'technicians', suffix: '+' },
    { target: 10, label: 'languages', suffix: '+' },
    { target: 5, label: 'headcount_churn', suffix: '%', prefix: '<' }
]
  return (
    <div>
      <HeroBanner />
      <GeneralExplanationSection />
      {/* <GenerelContent /> */}
      <VideoPlayer thumbnail="/images/thumbnail-rodopi.png" videoUrl="/images/homepage_video.mp4" />
      <InfoCompany />
      <StatsSection stats={stats} />
      <ServicesSection />
      <IndustriesSection />
      <LanguageSwitcher />
      <NewsSection />
      <CareerSection />
          <MapRodopi />
      {/* </section> */}
    </div>
  );
}