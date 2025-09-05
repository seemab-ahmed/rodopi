"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const JobListSection = ({ data }) => {
  const { locale } = useParams();
  return (
    <section className="w-full bg-neutral-50 py-[60px] md:py-[140px]">
      <div className="max-w-[1216px] w-full px-4 xl:px-0 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3 md:mb-6">
            {data.title_pre}{" "}
            <span className="text-primary">{data.title_highlight}</span>
          </h2>
          <p className="text-black w-full md:max-w-[600px] mx-auto font-semibold text-base sm:text-lg">
            {data.body}
          </p>
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {data.jobs &&
            data.jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-4"
              >
                {/* Job Title */}
                <div className="text-primary font-semibold text-base sm:text-lg mb-2 sm:mb-0">
                  {job.title}
                </div>

                {/* Info + Link */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 384 512"
                    >
                      <path d="M168 0C75 0 0 75 0 168c0 87.6 150.1 304 168 344 17.9-40 168-256.4 168-344C336 75 261 0 168 0zm0 256a88 88 0 1 1 0-176 88 88 0 0 1 0 176z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 22.2 95.3 59.4 130.3C52.3 412.3 29.2 452 0 480c0 0 64-4.8 112-32.4C148.1 462.7 200.3 480 256 480c141.4 0 256-93.1 256-208S397.4 32 256 32z" />
                    </svg>{" "}
                    {job.languages.join(", ")}
                  </span>
                  <Link
                    href={`/${locale}/jobs`}
                    className="flex items-center text-primary font-semibold hover:underline"
                  >
                    {data.read_more}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
