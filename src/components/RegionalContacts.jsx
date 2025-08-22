'use client'
import { Phone, Mail } from "lucide-react";

export const RegionalContacts = ({ data }) => {
  if (!data || !data.items || data.items.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl">
      <div className="w-full max-w-[1216px] mx-auto py-[40px] md:py-[80px] px-4 md:px-12">
        
        {/* Badge */}
        {data?.badge && (
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2  text-primary py-2 rounded-full text-lg sm:text-xl font-semibold mb-2 md:mb-6">
              {data.badge}
            </span>
          </div>
        )}

        {/* Main Heading */}
         <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6">
                        {data.title_pre}{' '}<span className="text-primary">{data.title_highlight}</span>
                    </h2>

        {/* Description */}
        {data?.description && (
          <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
        )}

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm py-6 px-4 flex flex-col text-center items-center border border-gray-100 hover:shadow-md transition"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              
              {/* Address */}
              <p className="text-base sm:text-lg text-gray-800 mb-4">{item.description}</p>

              {/* Phone */}
              {item.phone && (
                <p className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-medium mb-1">
                  <Phone className="w-4 h-4 text-green-600" />
                  <a href={`tel:${item.phone}`} className="hover:underline">{item.phone}</a>
                </p>
              )}

              {/* Email */}
              {item.email && (
                <p className="flex items-center gap-2 text-sm sm:text-base text-blue-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a href={`mailto:${item.email}`} className="hover:underline">{item.email}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
