import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { ContactTeam } from '@/components/ContactTeam';
import { LetsTalk } from '@/components/LetsTalkSection';
import { RegionalContacts } from '@/components/RegionalContacts';
import ContactForm from '@/components/ContactForm';

export default function ContactPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
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
      
      {/* map image wrapped in container to match other sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 p-4">
        <img
          src="/images/RODOPI_Offices_Map_2.png"
          alt="Contact Us"
          className="w-full h-auto rounded-3xl"
        />
      </div>
      <RegionalContacts data={industryData?.RegionalContacts} />
      <ContactForm />
      {/* <LetsTalk data={industryData?.contact} /> */}
    </>
  );
}
