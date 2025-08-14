"use client";

import { useTranslations } from "next-intl";

export const ContactTeam = () => {
  const t = useTranslations("ContactTeam");
  const teamMembers = t.raw("members"); // Get array directly from translations

  return (
    <section className="w-full py-[60px] md:py-[140px]">
      <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0">
    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-16">
      Meet Our Team
    </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm font-bold text-gray-500 mb-2">{member.role}</p>
              )}
              {member.description && (
                <p className="text-sm text-gray-600 mb-4">
                  {member.description}
                </p>
              )}
              <p className="text-sm text-blue-900">
                <strong>Email:</strong> {member.email}
              </p>
              <p className="text-sm text-gray-500 my-2">
                <strong>Phone:</strong> {member.phone}
              </p>
                <p className="text-sm text-gray-500">
                <strong>Language:</strong> {member.language}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
