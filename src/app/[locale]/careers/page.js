import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { HeroBannerSection } from '@/components/BannerSection';
import { GeneralContractorSection } from '@/components/GeneralContractor';
import { JobListSection } from '@/components/JobList';
import { ContactSections } from '@/components/ContactSection';
import { YourBenefitsRodopi } from '@/components/YourBenefitsRODOPI';
import { RecruitmentVideo } from '@/components/RecruitmentVideo';
import { KrebsGroupSection } from '@/components/KrebsGroup';
import { ContactUsInfoSections } from '@/components/ContactUsInfo';

export default function CareersPage({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const careersData = messages?.careers_page;
  const bannerContent = careersData?.ServiceBaner;

  if (!careersData) return <div>Careers page not found</div>;

  return (
    <>
      <HeroBannerSection
        backgroundImage={bannerContent?.bgImage}
        badgeText={bannerContent?.badgeText}
        title={bannerContent?.title}
        subtitle={bannerContent?.subtitle}
        primaryCta={{
          label: bannerContent?.primaryCta,
        }}
      secondaryCta={{
          label: bannerContent?.cta_button,
        }}
      />
      <GeneralContractorSection data={careersData?.GeneralContractor} />
      <JobListSection data={careersData?.JobListSection} />
      <ContactUsInfoSections data={careersData?.ContactUsInfoSections} />
      <YourBenefitsRodopi data={careersData?.YourBenefitsRodopi} />
      <RecruitmentVideo data={careersData?.RecruitmentVideo} />
      <KrebsGroupSection data={careersData?.KrebsGroup} />
    </>
  );
}
