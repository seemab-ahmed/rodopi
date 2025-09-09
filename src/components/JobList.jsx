"use client";
import { ArrowRight, MapPin, Globe, Search } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export const JobListSection = ({ data }) => {
  const { locale } = useParams();


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Location");
  const [selectedLanguage, setSelectedLanguage] = useState("All Language");

  
  const makeSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // space → dash
      .replace(/[^\w-]+/g, ""); // remove special chars


  const filteredJobs =
    data.jobs?.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLocation =
        selectedLocation === "All Location" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesLanguage =
        selectedLanguage === "All Language" ||
        job.languages.some(
          (lang) => lang.toLowerCase() === selectedLanguage.toLowerCase()
        );

      return matchesSearch && matchesLocation && matchesLanguage;
    }) || [];

  return (
    <section className="w-full bg-neutral-50 pt-[40px] md:pt-[80px]  pb-[50px] md:pb-[100px]">
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

       
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>

          {/* Location Dropdown */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-md py-3 px-3 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option>All Location</option>
            <option>Europe</option>
            <option>Greece</option>
          </select>

          {/* Language Dropdown */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-md py-3 px-3 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option>All Language</option>
            <option>English</option>
            <option>Greek</option>
          </select>
        </div>

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
              >
                {/* Job Title */}
                <h3 className="text-xl font-semibold text-primary mb-4">
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
                  href={`/${locale}/careers/${job.slug || makeSlug(job.title)}`}
                  className="flex items-center justify-between text-primary font-semibold text-base hover:underline group"
                >
                  {data.read_more}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-2">
              No jobs found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
