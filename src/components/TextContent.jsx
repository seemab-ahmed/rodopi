import Image from "next/image";
import { Phone, Mail, Printer } from "lucide-react";

export const TextContent = ({ data }) => {

  if (!data) {
    return (
      <div className="text-red-600">
        LetsTalk: No data provided.
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="flex w-full max-w-[1216px] px-4 xl:px-0 py-[64px] md:py-[90px] mx-auto flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          {data.title_pre && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6">
              {data.title_main}
            </h2>
          )}
          {data.title_pre && (
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
           {data.subheading2 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading2}
            </p>
          )}
          {data.para4 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para4}
            </p>
          )}
          {data.para5 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para5}
            </p>
          )}
          {data.para6 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para6}
            </p>
          )}
        {data.para7 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para7}
            </p>
          )}
          {data.para8 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para8}
            </p>
          )}
              {data.subheading3 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading3}
            </p>
          )}
          {data.para9 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para9}
            </p>
          )}
              {data.subheading4 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading4}
            </p>
          )}
          {data.para10 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para10}
            </p>
          )}
              {data.subheading5 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading5}
            </p>
          )}
          {data.para11 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para11}
            </p>
          )}
              {data.subheading6 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading6}
            </p>
          )}
          {data.para12 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para12}
            </p>
          )}
              {data.subheading7 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading7}
            </p>
          )}
          {data.para13 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para13}
            </p>
          )}

            {data.subheading8 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading8}
            </p>
          )}
            {data.para14 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para14}
            </p>
          )}
            {data.para15 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para15}
            </p>
          )}
          {data.subheading9 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
              {data.subheading9}
            </p>
          )}
            {data.para16 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para16}
            </p>
          )}
          
        </div>

        {/* Right Side - Image */}
        {/* {data.image && (
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={data.image}
              alt={data.title_pre || "Contact"}
              width={650}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        )} */}
      </div>
    </section>
  );
};
