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
import MissionVision from '@/components/MissionVision';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import GeneralExplanationSection from '@/components/GeneralExplanationSection';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <HeroBanner />
      <GeneralExplanationSection />
      <MapRodopi />
      {/* <GenerelContent /> */}
      <InfoCompany />
      <MissionVision />
      <ServicesSection />
      <IndustriesSection />
      <LanguageSwitcher />

      {/* <section className='w-full'>
        <GenerelContent /> */}

      {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-8 sm:pb-12 lg:pb-16 place-items-center'>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div> */}
      {/* <ClientsSection /> */}
      {/* <ContactsSection /> */}
      {/* <QualitySection /> */}
      <NewsSection />
      <CareerSection />
      {/* </section> */}
    </div>
  );
}