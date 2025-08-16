'use client'
import { Lightbulb, ShieldCheck, Globe, Users, Trophy } from "lucide-react"
import { useTranslations } from 'next-intl'

export const BenefitsServices = ({ data }) => {
  const icons = [
    <Lightbulb className="w-8 h-8 text-primary" />,
    <ShieldCheck className="w-8 h-8 text-primary" />,
    <Globe className="w-8 h-8 text-primary" />,
    <Users className="w-8 h-8 text-primary" />,
    <Trophy className="w-8 h-8 text-primary" />,
  ];
  return (
    <section className="w-full bg-green-100 bg-gradient-to-br shadow-xl from-primary/20 to-primary/5">
      <div className="w-full max-w-[1216px] mx-auto  py-[40px] md:py-[80px] px-4 md:px-12">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className=" text-green-700 text-sm font-medium px-4 py-1 rounded-full flex items-center gap-2">
            {data?.badge}
          </span>
        </div>
        {/* Main Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          {data?.heading}
        </h2>
        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {data?.items?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm py-6 px-3 flex flex-col items-center text-center border border-gray-100 hover:shadow-md transition"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                {icons[idx]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
