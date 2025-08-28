import Image from "next/image";
import { Phone, Mail, Printer } from "lucide-react";

export const LegalNoticeSection = ({ data }) => {

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
          {(data.title_pre || data.title_highlight) && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6">
              {data.title_pre}
            </h2>
          )}
          {data.subheading && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed ">
              {data.subheading}
            </p>
          )}
          {data.para1 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para1}
            </p>
          )}
          {data.para2 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para2}
            </p>
          )}
          {data.para3 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para3}
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
          
{data.fax && (
  <div className="flex items-center gap-2">
    <Printer className="h-5 w-5 text-primary" />
    <a href={`fax:${data.fax.trim()}`} className="text-gray-800 hover:text-primary">
      {data.fax.trim()}
    </a>
  </div>
)}
{data.faxx && (
  <div className="flex items-center gap-2">
    <Printer className="h-5 w-5 text-primary" />
    <a href={`fax:${data.faxx.trim()}`} className="text-gray-800 hover:text-primary">
      {data.faxx.trim()}
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
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={data.image}
              alt={data.title_pre || "Contact"}
              width={650}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};
