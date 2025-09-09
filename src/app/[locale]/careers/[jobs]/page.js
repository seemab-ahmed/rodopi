import en from '@/../messages/en.json';
import de from '@/../messages/de.json'; 
import { JobsSection } from '@/components/JobsSection';
import { ApplySection } from '@/components/ApplySection';

export default function Jobpages({ params }) {

  const { locale } = params;
  const messages = locale === 'de' ? de : en;
  const jobData = messages?.job_page;

  if (!jobData) return <div>Job page not found</div>;

  const makeSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  // URL 
  const slug = Array.isArray(params.jobs) ? params.jobs[0] : params.jobs;

  if (slug) {
    const selectedJob =
      jobData?.JobsSection?.slug === slug
        ? jobData.JobsSection
        : null;

    if (!selectedJob) {
      return (
        <div className="p-8 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <p className="text-gray-600">
            This job either has no slug or doesn’t exist in data.
          </p>
        </div>
      );
    }

    // Detail pageeee
    return (
      <div className="">
        <div className='w-full mx-auto p-8 max-w-[1216px]'>
        <h1 className="text-3xl font-bold mb-4 text-primary">{selectedJob.mainheading}</h1>
        <p className="text-gray-700 mb-4">{selectedJob.textPara1}</p>
        <p className="text-gray-700 mb-4">{selectedJob.textPara2}</p>
        <p className="text-gray-700 mb-4">{selectedJob.textPara3}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">{selectedJob.subheading}</h2>
        <p className="text-gray-700 mb-4">{selectedJob.textPara4}</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">{selectedJob.subheading1}</h3>
        <ul className="list-disc pl-6 mb-4">
          {selectedJob.responsibilities?.map((item, idx) => (
            <li key={idx} className="mb-2 text-gray-700">{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">{selectedJob.subheading2}</h3>
        <ul className="list-disc pl-6 mb-4">
          {selectedJob.requirements?.map((item, idx) => (
            <li key={idx} className="mb-2 text-gray-700">{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">{selectedJob.subheading3}</h3>
        <ul className="list-disc pl-6 mb-4">
          {selectedJob.perks?.map((item, idx) => (
            <li key={idx} className="mb-2 text-gray-700">{item}</li>
          ))}
        </ul>
</div>
<div className='w-full max-w-[1220px] mx-auto'>
        <ApplySection data={jobData?.ApplySection} />

</div>
      </div>
    );
  }
}
