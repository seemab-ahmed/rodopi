import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export const ContactSections = ({ data }) => {

  if (!data) {
    return (
      <div className="text-red-600">
        LetsTalk: No data provided.
      </div>
    );
  }

  return (
    <section className="bg-gray-200">
      <div className="flex w-full max-w-[1216px] px-4 xl:px-0 py-[64px] md:py-[90px] mx-auto flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          {data.question && (
            <p className="inline-flex items-center gap-2 text-primary py-2 rounded-full text-lg sm:text-xl font-semibold mb-2 md:mb-6">
              {data.question}
            </p>
          )}
          {(data.title_pre || data.title_highlight) && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6">
              {data.title_pre} <span className="text-primary">{data.title_highlight}</span>
            </h2>
          )}
          {data.description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.description}
            </p>
          )}

          <div className="space-y-2 mt-2">
            {data.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={`tel:${data.phone}`}
                  className="text-gray-800 hover:text-primary"
                >
                  {data.phone}
                </a>
              </div>
            )}
            {data.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-800 hover:text-primary"
                >
                  {data.email}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        {data.image && (
          <div className="w-full  flex justify-center">
            <Image
              src={data.image}
              alt={data.title_pre || "Contact"}
              width={650}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};
