"use client";
import { useState } from "react";

export const ContactTeam = ({ data }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="w-full py-[60px] md:py-[140px]">
      <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0">
        {/* Heading from props */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-16">
          {data?.heading}
        </h2>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {data?.members?.map((member, idx) => (
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
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {member.description}
                  </p>
                )}
                <p className="text-sm text-blue-900">
                  <strong>Email:</strong> {member.email}
                </p>
                {/* <p className="text-sm text-gray-500 my-2">
                  <strong>Phone:</strong> {member.phone}
                </p> */}
                <p className="text-sm text-gray-500">
                  <strong>Language:</strong> {member.language}
                </p>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative flex flex-col items-center">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-primary text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-primary mb-2 text-center">
              {selectedMember.name}
            </h3>
            {selectedMember.role && (
              <p className="text-base font-semibold text-gray-600 mb-2 text-center">{selectedMember.role}</p>
            )}
            {selectedMember.description && (
              <p className="text-sm text-gray-700 mb-4 text-center">
                {selectedMember.description}
              </p>
            )}
            <div className="w-full flex flex-col gap-2 mb-2">
              {selectedMember.email && (
                <p className="text-sm text-blue-900"><strong>Email:</strong> {selectedMember.email}</p>
              )}
              {selectedMember.phone && (
                <p className="text-sm text-gray-700"><strong>Phone:</strong> {selectedMember.phone}</p>
              )}
              {selectedMember.language && (
                <p className="text-sm text-gray-700"><strong>Language:</strong> {selectedMember.language}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedMember(null)}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
