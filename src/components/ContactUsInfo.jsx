import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { ContactTeam } from "@/components/ContactTeam";

export const ContactUsInfoSections = ({ data }) => {
  if (!data) {
    return (
      <div className="text-red-600 text-center py-8 text-lg font-semibold">
        ⚠️ No data provided for Contact Section.
      </div>
    );
  }

  // If a members array is provided, render a team grid using ContactTeam
  if (data.members && Array.isArray(data.members) && data.members.length > 0) {
    return (
      <ContactTeam
        data={{
          heading: data.question || data.title_pre || "Meet Our Team",
          members: data.members,
        }}
      />
    );
  }

  return (
    <section className="bg-gray-50">
      <div className="flex w-full max-w-[1216px] px-4 xl:px-0 py-[64px] md:py-[90px] mx-auto flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        {data.image && (
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={data.image}
              alt={data.title_pre || "Contact"}
              width={500}
              height={350}
              className="rounded-full object-cover shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        )}

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {data.question && (
            <p className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm sm:text-base font-medium mb-4">
              {data.question}
            </p>
          )}
          {(data.title_pre || data.title_highlight) && (
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-snug tracking-tight mb-4">
              {data.title_pre}{" "}
              <span className="text-primary">{data.title_highlight}</span>
            </h2>
          )}
          {data.description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              {data.description}
            </p>
          )}

          {/* Contact Details */}
          <div className="space-y-4">
            {data.phone && (
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={`tel:${data.phone}`}
                  className="text-gray-800 hover:text-primary font-medium transition-colors"
                >
                  {data.phone}
                </a>
              </div>
            )}
            {data.email && (
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-800 hover:text-primary font-medium transition-colors"
                >
                  {data.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
