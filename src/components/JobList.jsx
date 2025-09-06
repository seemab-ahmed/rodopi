"use client";
import { ArrowRight, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export const JobListSection = ({ data }) => {
  const { locale } = useParams();

  return (
    <section className="w-full bg-neutral-50 py-[60px] md:py-[140px]">
      <div className="max-w-[1216px] w-full px-4 xl:px-0 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {data.title_pre}{" "}
            <span className="text-primary">{data.title_highlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            {data.body}
          </p>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.jobs &&
            data.jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
              >
                {/* Job Title */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  {job.title}
                </h3>

                {/* Job Info */}
                <div className="space-y-3 text-gray-600 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <span>{job.languages.join(", ")}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/${locale}/jobs`}
                  className="flex items-center justify-between text-primary font-semibold text-base hover:underline group"
                >
                  {data.read_more}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
