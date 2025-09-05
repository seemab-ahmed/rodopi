import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { JobsSection } from '@/components/JobsSection';
import { ApplySection } from '@/components/ApplySection';

export default function Jobpages({ params }) {
  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const jobData = messages?.job_page;

  if (!jobData) return <div>Contact page not found</div>;

  return (
    <>
      <JobsSection data={jobData?.JobsSection} />
      <ApplySection data={jobData?.ApplySection} />
    </>
  );
}
