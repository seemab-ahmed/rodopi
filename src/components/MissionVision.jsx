"use client";
import { useTranslations } from "next-intl";
// import { Users, Lightbulb, ShieldCheck, Target, Globe, BarChart, TrendingUp, Award, Star, CheckCircle } from 'lucide-react'
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Globe,
  Users,
  Award,
  Star,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    label: "We lead with a “can-do” mindset",
    description:
      " approaching every challenge with determination and optimism. ",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    label: "We act as partners ",
    description: "working together with humility, fairness, and honesty. ",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    label: "We take pride in delivering quality",
    description:
      "holding ourselves accountable and driven by a strong will to perform. ",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    label: "We uphold humaneness and integrity",
    description: "showing dignity in both our professional and personal lives.",
  },
];

const MissionVision = () => {
  const t = useTranslations("MissionVision");

  return (
    <section className=" w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            Our Purpose
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {t("title")}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Vision Section */}
        {/* <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                                <Eye className="w-4 h-4" />
                                {t('vision_title')}
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                {t('vision_text')}
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Driven by innovation, quality and deep expertise, we are committed to shaping the future of sustainable energy.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">European Leadership</h3>
                                    <p className="text-sm text-gray-600">Leading the energy transition across Europe</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Target className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Sustainable Solutions</h3>
                                        </div>
                                        <p className="text-gray-600">Advancing renewable energy and infrastructure across Europe</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Lightbulb className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Innovation Driven</h3>
                                        </div>
                                        <p className="text-gray-600">Pioneering new technologies and approaches</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Award className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Quality & Expertise</h3>
                                        </div>
                                        <p className="text-gray-600">Deep technical knowledge and proven track record</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* Mission Section */}
        {/* <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-3xl">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Users className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Employer of Choice</h3>
                                        </div>
                                        <p className="text-gray-600">Preferred workplace in renewable energy and infrastructure</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Heart className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Empowering People</h3>
                                        </div>
                                        <p className="text-gray-600">Supporting our team and partners to succeed</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Globe className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Cleaner Future</h3>
                                        </div>
                                        <p className="text-gray-600">Shaping a more resilient and sustainable world</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                <Target className="w-4 h-4" />
                                {t('mission_title')}
                            </div>
                            <h2 className="text-xl sm:text-xl font-bold text-gray-900 leading-tight">
                                {t('mission_text')}
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Empowering our people and partners to shape a cleaner, more resilient future through sustainable practices and innovative solutions.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">People First</h3>
                                    <p className="text-sm text-gray-600">Empowering our team and partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/* Mission, Vision, Values Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <Target className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mission</h3>
            <p className="text-gray-600 text-base">
              To be the employer of choice in the renewable energy and
              infrastructure services sectors, empowering our people and
              partners to shape a cleaner, more resilient future. Through our
              in-house RODOPI Academy, we recruit, train and retain skilled
              professionals, ensuring seamless integration into projects across
              diverse industries. Our mission is to empower our workforce with
              the tools and expertise they need to perform real, impactful work
              — safely, efficiently and to the highest standards.
            </p>
          </div>
          {/* Vision Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <Eye className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
            <p className="text-gray-600 text-base">
              To be the employer of choice for maintenance professionals and the
              trusted specialized service partner for industrial and energy
              companies worldwide — delivering tailored solutions for their
              maintenance and repair needs with excellence and integrity.{" "}
            </p>
          </div>
          {/* Values Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <Star className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Values</h3>
            <p className="text-gray-600 pb-2 text-base">
              At RODOPI, our values are the moral foundation and ethical compass
              that guide every team member — shaping how we work, how we
              collaborate and how we present ourselves to the world.
            </p>
            <ul className="text-gray-600 text-base space-y-2 text-left">
              {values.map((value, idx) => (
                <li key={idx} className="">
                    <div className="flex gap-2">
                  {value.icon}
                  <p className="font-semibold text-gray-800">
                    {value.label}:
                  </p>
                  </div>
                  <p>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Section */}
        {/* <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Heart className="w-4 h-4" />
                            {t('values_title')}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {t('values_text')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('values_description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="group text-center">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{value.label}</h3>
                                    <p className="text-sm text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default MissionVision;
