import Image from "next/image";
import { Phone, Mail} from "lucide-react";

export const PrivacyTextContent = ({ data }) => {

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
          {data.title_main && (
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
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed ">
              {data.subheading}
            </p>
          )}
          {data.para1 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para1}
            </p>
          )}
           {data.subheading2 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-5">
              {data.subheading2}
            </p>
          )}
           {data.Question && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-5.5 pb-1">
              {data.Question}
            </p>
          )}
          {data.para2 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para2}
            </p>
          )}
          {data.Question2 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-5.5 pb-1">
              {data.Question2}
            </p>
          )}
          {data.para3 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pb-2">
              {data.para3}
            </p>
          )}
          
          {data.para4 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para4}
            </p>
          )}
           {data.Question3 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-5.5 pb-1">
              {data.Question3}
            </p>
          )}
          {data.para5 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para5}
            </p>
          )}
             {data.Question4 && (
            <p className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-5.5 pb-1">
              {data.Question4}
            </p>
          )}
          {data.para6 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para6}
            </p>
          )}
        {data.para7 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-2">
              {data.para7}
            </p>
          )}
           {data.title_main2 && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-4 mt-4 md:mt-8">
              {data.title_main2}
            </h2>
          )}
             {data.subheading3 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed ">
              {data.subheading3}
            </p>
          )}
          {data.para8 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para8}
            </p>
          )}
           
          {data.para9 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-2">
              {data.para9}
            </p>
          )}
            {data.para10 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-2">
              {data.para10}
            </p>
          )}
              {data.subheading4 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed mt-4">
              {data.subheading4}
            </p>
          )}
            {data.para11 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para11}
            </p>
          )}
           {data.para12 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para12}
            </p>
          )}
           {data.para13 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para13}
            </p>
          )}
             {data.para14 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para14}
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
          {data.para15 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para15}
            </p>
          )}
              {data.subheading5 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed mt-4">
              {data.subheading5}
            </p>
          )}
            {data.para16 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para16}
            </p>
          )}
              {data.subheading6 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed mt-4">
              {data.subheading6}
            </p>
          )}
          {data.para17 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para17}
            </p>
          )}         
              {data.subheading7 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed ">
              {data.subheading7}
            </p>
          )}

          {data.para18 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para18}
            </p>
          )}
          {data.para19 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para19}
            </p>
          )}
          {data.para20 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para20}
            </p>
          )}
          {data.para21 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
              {data.para21}
            </p>
          )}
             <div className="space-y-2 mt-2">
            {data.phone2 && (
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href={`tel:${data.phone}`}
                  className="text-gray-800 hover:text-primary"
                >
                  {data.phone2}
                </a>
              </div>
            )}
            {data.email2 && (
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-800 hover:text-primary"
                >
                  {data.email2}
                </a>
              </div>
            )}
          </div>
            {data.subheading8 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading8}
            </p>
          )}
            {data.para22 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para22}
            </p>
          )}

          {data.subheading9 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading9}
            </p>
          )}

            {data.para23 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para23}
            </p>
          )}
           {data.subheading10 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading10}
            </p>
          )}
            {data.para24 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para24}
            </p>
          )}
            {data.para25 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para25}
            </p>
          )}
             {data.subheading11 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading11}
            </p>
          )}
           {data.para26 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para26}
            </p>
          )}
              {data.subheading12 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading12}
            </p>
          )}
             {data.para27 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para27}
            </p>
          )}
              {data.subheading13 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading13}
            </p>
          )}
             {data.para28 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para28}
            </p>
          )}
              {data.subheading14 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading14}
            </p>
          )}
             {data.para29 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para29}
            </p>
          )}
             {data.para30 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para30}
            </p>
          )}
             {data.para31 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para31}
            </p>
          )}
             {data.para32 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para32}
            </p>
          )}
             {data.para33 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para33}
            </p>
          )}
             {data.para34 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para34}
            </p>
          )}
                {data.subheading15 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading15}
            </p>
          )}
             {data.para35 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para35}
            </p>
          )}
             {data.para36 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para36}
            </p>
          )}
 {data.title_main3 && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6 mt-4 md:mt-8">
              {data.title_main3}
            </h2>
          )}
            {data.subheading16 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading16}
            </p>
          )}
             {data.para37 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para37}
            </p>
          )}
             {data.para38 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para38}
            </p>
          )}
             {data.para39 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para39}
            </p>
          )}
             {data.para40 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para40}
            </p>
          )}
             {data.para41 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para41}
            </p>
          )}
             {data.para42 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para42}
            </p>
          )}
               {data.subheading17 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading16}
            </p>
          )}
             {data.para43 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para43}
            </p>
          )}
             {data.para44 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para44}
            </p>
          )}
             {data.para45 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para45}
            </p>
          )}
           {data.title_main4 && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6 mt-4 md:mt-8">
              {data.title_main4}
            </h2>
          )}
            {data.subheading18 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading18}
            </p>
          )}
             {data.para46 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para46}
            </p>
          )}
             {data.para47 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para47}
            </p>
          )}
             {data.para48 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para48}
            </p>
          )}
           {data.title_main5 && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6 mt-4 md:mt-8">
              {data.title_main5}
            </h2>
          )}
            {data.subheading19 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading19}
            </p>
          )}
             {data.para49 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para49}
            </p>
          )}
             {data.para50 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para50}
            </p>
          )}
             {data.para51 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para51}
            </p>
          )}
             {data.para52 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para52}
            </p>
          )}
             {data.para53 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para53}
            </p>
          )}
             {data.para54 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para54}
            </p>
          )}
             {data.para55 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para55}
            </p>
          )}
            {data.subheading20 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading19}
            </p>
          )}
             {data.para56 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para56}
            </p>
          )}
             {data.para57 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para57}
            </p>
          )}
             {data.para58 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para58}
            </p>
          )}
             {data.para59 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para59}
            </p>
          )}
             {data.para60 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para60}
            </p>
          )}
             {data.para61 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para61}
            </p>
          )}
              {data.title_main6 && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6 mt-4 md:mt-8">
              {data.title_main6}
            </h2>
          )}
            {data.subheading21 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading21}
            </p>
          )}
             {data.para62 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para62}
            </p>
          )}
            {data.subheading22 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading22}
            </p>
          )}
          {data.para63 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para63}
            </p>
          )}{data.para64 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para64}
            </p>
          )}
            {data.subheading23 && (
            <p className="text-xl font-semibold sm:text-3xl text-gray-600 leading-relaxed pt-4">
              {data.subheading23}
            </p>
          )}
          {data.para65 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para65}
            </p>
          )}
          {data.para66 && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl pt-4">
              {data.para66}
            </p>
          )}
           {data.subheading24 && (
            <p className="text-xl font-semibold sm:text-3xl text-black leading-relaxed pt-8">
              {data.subheading24}
            </p>
          )}
          {data.para67 && (
            <p className="text-base sm:text-lg text-black leading-relaxed max-w-3xl pt-2">
              {data.para67}
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
